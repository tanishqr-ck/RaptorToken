import React , {useState} from "react";
import { raptor_backend,canisterId, createActor } from "../../../declarations/raptor_backend";
import { AuthClient } from "@dfinity/auth-client";

function Faucet() {
  const [isDisabled, setDisable]=useState(false);
  const [buttonResult, setResult]=useState("Claim Now");
  async function handleClick(event) {
    setDisable(true);
    const authClient=await AuthClient.create();
    const identity=await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId,{
      agentOptions:{
        identity,
      },
    });

    setResult( await raptor_backend.claimToken());
  }

  return (
    <div className="window white">
      <h2>
        <span role="img" aria-label="tap emoji">
        💰
        </span>
        Faucet
      </h2>
      <label>Get your free Raptor tokens here! Claim 1,000 RTP coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} 
        disabled={isDisabled}>
          {buttonResult}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
