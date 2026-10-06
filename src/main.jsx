import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer, Zoom } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="bottom-center"
      transition={Zoom}
      theme="colored"
      toastStyle={{
        color: 'oklch(70.4% 0.14 182.503)',
        backgroundColor: '#FFFFFF', 
        height: '1.5rem',
      }}
    />
  </StrictMode>,
);
