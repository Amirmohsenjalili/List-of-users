import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import styles from "./style.module.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <SnackbarProvider
      autoHideDuration={2000}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
