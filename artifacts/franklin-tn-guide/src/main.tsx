import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

// Use hydrateRoot if the root element has server-rendered content (SSG)
// Fall back to createRoot for dev mode (no pre-rendered HTML)
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
