// Cart Item Component - displays individual item in the shopping cart with delete option
import { AiFillDelete } from "react-icons/ai"; 
import { useDispatch } from "react-redux"; // Hook to dispatch Redux actions
import { remove } from "../redux/Slices/CartSlice"; // Remove action from cart slice
import { toast } from "react-hot-toast"; 

const CartItem = ({ item, itemIndex }) => {
  // Get dispatch function to trigger Redux actions
  const dispatch = useDispatch();

  // Remove item from cart and show success toast
  const removeFromCart = () => {
    dispatch(remove(item.id)); // Dispatch remove action with item ID
    toast.success("Item Removed from Cart"); // Show removal notification
  };

  return (
    // Cart item container with responsive layout (mobile and desktop)
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
       
        <div className="w-[30%]">
          <img className="object-cover" src={item.image} alt={item.title} />
        </div>

       
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          {/* Item title */}
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>

          {/* Item description */}
          <h1 className="text-base text-slate-700 font-medium">
            {item.description}
          </h1>

          {/* Price and delete button section */}
          <div className="flex items-center justify-between">
            {/* Item price in green */}
            <p className="font-bold text-lg text-green-600">{item.price}</p>

            {/* Delete button with red styling and hover effect */}
            <div
              className="text-red-800 bg-red-200 hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={removeFromCart}
            >
              <AiFillDelete /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
