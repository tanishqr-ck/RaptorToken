import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
actor raptor{
  var owner : Principal = Principal.fromText("l5moi-i67ha-3iqr3-to67l-6x2ns-7jdov-3o2qg-fubgi-w3c3q-ywnue-qqe");
  var totalSupply: Nat = 1000000000;
  var symbol :Text = "RPT";
  Debug.print(debug_show("hello"));
   private stable var balanceEntries:[(Principal,Nat)]=[];
   private var balances = HashMap.HashMap<Principal,Nat>(1, Principal.equal,Principal.hash);
    if (balances.size() < 1) {
      balances.put(owner, totalSupply);
    };
    public query func balanceOf(who: Principal) : async Nat {
     let balance : Nat = switch(balances.get(who))
     {
      case null 0;
      case (?result) result;
     };
     return balance;
  };
  public query func getSymbol() : async Text{
       return symbol;
  };
  public shared(msg) func claimToken() : async Text{
    Debug.print(debug_show(msg.caller));
    if(balances.get(msg.caller)==null){
      let amount:Nat=1000;
      let result=await transfer(msg.caller,amount);
      return result;
    }
    else
    return "Already Claimed";
  } ;
  public shared(msg) func transfer(to: Principal,amount: Nat) : async Text{
    let fromBalance : Nat =await balanceOf(msg.caller);
    if(fromBalance > amount)
    {
      let newFromBalance:Nat=fromBalance-amount;
      balances.put(msg.caller,newFromBalance);
      let toBalance: Nat=await balanceOf(to);
      let newAmount:Nat= toBalance+amount;
      balances.put(to,newAmount);

      return "Successfully transferred";
    }
    else
    return "Insufficient balance";
  };
  system func preupgrade(){
  balanceEntries := Iter.toArray(balances.entries());
  };
  system func postupgrade(){
      balances := HashMap.fromIter<Principal,Nat>(balanceEntries.vals(),1, Principal.equal,Principal.hash);
      if (balances.size() < 1) {
      balances.put(owner, totalSupply);
    };
  };

};