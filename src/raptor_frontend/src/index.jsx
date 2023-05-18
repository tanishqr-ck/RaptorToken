import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from '../../../node_modules/@dfinity/auth-client/lib/cjs/index';
const init = async () => { 
  handleAuthenticated();  // Till I get ICP cycles.
  // const authClient = await AuthClient.create();
  // if (await authClient.isAuthenticated()) {
  //   comsole.log("authenticated")
  //   handleAuthenticated(authClient);
  // } else {
  //   await authClient.login({
  //     identityProvider: "https://identity.ic0.app/#authorize",
  //     onSuccess: () => {
  //       handleAuthenticated(authClient);
  //     },
  //   });
  // }

};
async function handleAuthenticated(authClient) {
  // const identity = await authClient.getIdentity();
  // const userPrincipal = identity._principal.toString();
  // console.log(userPrincipal);
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}

init();


