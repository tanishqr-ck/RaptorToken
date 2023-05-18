import React ,{useState} from "react";
import { raptor_backend } from "../../../declarations/raptor_backend";
import { Principal } from '@dfinity/principal';
function Balance() {
  const[inputValue, setInput] = useState("");
  const[balanceResult,setBalance]= useState("");
  const[symbolResult,setSymbol]= useState("");
  const[isHidden,setHidden]=useState(true);
  async function handleClick() {
   const principal = Principal.fromText(inputValue);
   setHidden(true);
   const balance = await raptor_backend.balanceOf(principal);
   setBalance(balance.toLocaleString());
   setSymbol(await raptor_backend.getSymbol());
   setHidden(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value= {inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          class="status"
          onClick={handleClick}
          
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {balanceResult} {symbolResult}</p>
    </div>
  );
}

export default Balance;
