import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import HeaderProvider from "./context-api/HeaderContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <HeaderProvider>
<App/>

    </HeaderProvider>
    </BrowserRouter>
  </StrictMode>
);
