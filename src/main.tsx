import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-responsive-modal/styles.css";
import { BrowserRouter } from "react-router-dom";
import { Auth_Context_Provider } from "./context/auth.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Auth_Context_Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth_Context_Provider>
  </React.StrictMode>
);
