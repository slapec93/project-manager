// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app");
  const root = createRoot(container);
  root.render(<App />);
});
