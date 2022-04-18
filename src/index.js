import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvide";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ResultContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ResultContextProvider>
);
