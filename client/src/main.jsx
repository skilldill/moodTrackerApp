import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import 'react-mobile-modals/dist/index.css';
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
