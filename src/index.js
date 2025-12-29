// Main entry point of the React application
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Redux provider for global state management
import { BrowserRouter } from "react-router-dom"; // Router for page navigation
import App from "./App";
import "./index.css"; // Global styles including Tailwind CSS
import { store } from "./redux/Store"; // Redux store configuration
import { Toaster } from "react-hot-toast"; // Toast notifications library

// Create root React DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap application with routing and state management providers
root.render(
  <BrowserRouter> {/* Enable client-side routing */}
    <Provider store={store}> {/* Provide Redux store to entire app */}
      <App /> {/* Main application component */}
      <Toaster /> {/* Toast notification container */}
    </Provider>
  </BrowserRouter>
);
