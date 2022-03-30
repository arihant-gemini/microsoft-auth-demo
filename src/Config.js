import { useReducer } from "react";

export const config={
    appId:'3ce11584-9291-4711-b31e-af033b41aad6',
    scopes:[
        'user.read'
    ],
    authority:'https://login.microsoftonline.com/b9806c7d-9280-4e44-afea-6dc0ff495c2f'
}
export const msalConfig = {
    auth: {
      clientId: "3ce11584-9291-4711-b31e-af033b41aad6",
      authority: "https://login.microsoftonline.com/b9806c7d-9280-4e44-afea-6dc0ff495c2f", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000/",
    },
    cache: {
      cacheLocation: "localStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
