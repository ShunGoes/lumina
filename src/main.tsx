import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-responsive-modal/styles.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth.context.tsx";
import { AppConfigProvider } from "./context/appConfig.context.tsx";
import StoreProvider from "./stores/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <AuthProvider>
                    <AppConfigProvider>
                        <App />
                    </AppConfigProvider>
                </AuthProvider>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
