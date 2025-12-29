// Navigation Bar Component - displays site branding and navigation links
import { FaShoppingCart } from "react-icons/fa"; // Shopping cart icon
import { useSelector } from "react-redux"; // Hook to access Redux state
import { NavLink } from "react-router-dom"; // Link component for client-side routing

const Navbar = () => {
  // Get cart items from Redux store
  const cart = useSelector((state) => state.cart);

  return (
    <div>
     
      <nav className="flex justify-between items-center h-20 px-8 bg-gradient-to-r from-black-900 to-blue-800 shadow-xl border-b-4 border-amber-500">
        
        <NavLink to="/">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="ShopNest Logo"
              className="h-14 hover:scale-110 transition duration-300"
            />
            <span className="text-amber-400 font-bold text-xl hidden sm:block">
    
            </span>
          </div>
        </NavLink>

        {/* Navigation links and cart icon */}
        <div className="flex items-center font-semibold text-slate-100 mr-5 space-x-8">
          {/* Home link */}
          <NavLink to="/">
            <p className="uppercase text-xl font-bold hover:text-amber-300 transition duration-300">
              Home
            </p>
          </NavLink>

          {/* Shopping cart link with item counter badge */}
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl hover:text-amber-300 transition duration-300" />
              {/* Badge showing number of items in cart */}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-xs w-6 h-6 flex justify-center items-center animate-bounce rounded-full text-white font-bold">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
