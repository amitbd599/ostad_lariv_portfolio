import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    ></ToastContainer>
    <App />
  </>
);
