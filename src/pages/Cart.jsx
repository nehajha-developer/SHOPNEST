// Cart Page Component - displays items in shopping cart with total and checkout option
import { useEffect, useState } from "react"; 
import { useSelector } from "react-redux"; 
import { Link } from "react-router-dom"; 
import CartItem from "../components/CartItem"; // Individual cart item component

const Cart = () => {
  // Get cart items from Redux store
  const cart = useSelector((state) => state.cart);

  // State for total amount calculation
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate total amount whenever cart changes
  useEffect(() => {
    // Sum all prices CALCULATE KAREGA
    setTotalAmount(
      cart.reduce((acc, curr) => acc + Number(curr.price || 0), 0)
    );
  }, [cart]); 

  return (
    <div>
      {/* Jab cart me item h toh show karega nhi toh no items */}
      {cart.length > 0 ? (
        
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          {/* Left section: Cart items list */}
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {/* Map function cart to structre way me alne ke liye through cart items and display each one */}
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          {/* Right section: Order summary */}
          <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
              {/* Cart Summary header */}
              <div className="flex flex-col gap-5">
                <div className="font-semibold text-xl text-green-800">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700 -mt-5">
                  Summary About Product
                </div>

                {/* Total items count */}
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">
                    Total Items: {cart.length}
                  </span>
                </p>
              </div>
            </div>

            {/* Total amount and checkout button */}
            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">Net Amount:</span>{" "}
                ${totalAmount}
              </p>

              {/* Checkout button - placeholder for payment integration */}
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty cart message with link to shop
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>

          {/* Link back to home page to continue shopping */}
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
