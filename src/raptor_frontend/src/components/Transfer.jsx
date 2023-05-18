import React from "react";
import { raptor_backend } from "../../../declarations/raptor_backend";
import { useState } from "react";
import { Principal } from '@dfinity/principal';
function Transfer() {
  const [amount,setAmount]=useState("");
  const [id,setId]=useState("");
  const [isDisabled, setDisable]=useState(false);
  const [isHidden,setHidden]=useState(true);
  const [transferResult,setResult]=useState("");
  async function handleClick() {
    setDisable(true);
    const idp=Principal.fromText(id);
    const amountn=Number(amount);
    const result=await raptor_backend.transfer(idp,amountn);
    setHidden(false);
    setResult(result);
    setDisable(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} 
          disabled={isDisabled}
        >
            Transfer
          </button>
        </p>
        <p class="status" hidden={isHidden}>{transferResult}!!!</p>
      </div>
    </div>
  );
}

export default Transfer;
