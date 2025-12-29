// Main App component - handles routing and layout
import { Routes, Route } from "react-router-dom"; // Router components for navigation
import Navbar from "./components/Navbar"; // Navigation bar component
import Home from "./pages/Home"; // Home page with product listing
import Cart from "./pages/Cart"; // Shopping cart page

const App = () => {
  return (
    <div>
      {/* Navbar - fixed at top for navigation */}
      <div className="bg-slate-900">
        <Navbar />
      </div>

      {/* Route definitions - handles page switching */}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Home page - displays all products */}
        <Route path="/cart" element={<Cart />} />{" "}
        {/* Cart page - displays selected items */}
      </Routes>
    </div>
  );
};

export default App;
