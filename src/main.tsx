import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-responsive-modal/styles.css";
import { BrowserRouter } from "react-router-dom";
import { Auth_Context_Provider } from "./context/auth.context.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="956836299486-9apdeqb03v0o8jnd6pt4praia196ni35.apps.googleusercontent.com">
      <Auth_Context_Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth_Context_Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
