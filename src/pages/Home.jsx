// Home Page Component - displays all products from API with loading state
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; 
import Product from "../components/Product"; 
const Home = () => {
  // API endpoint - Fake Store API for product data
  const API_URL = "https://fakestoreapi.com/products";

  // State for loading and products data
  const [loading, setLoading] = useState(false); // Track loading state
  const [posts, setPosts] = useState([]); // Store fetched products

  // Function to fetch product data from API
  async function fetchProductData() {
    setLoading(true); // Show loading spinner
// Api fetch karte time always try catch lagana h
    try {
      // Fetch products from API
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data); // Update state with fetched data
    } catch (error) {
      // Log error if fetch fails
      console.log("Error fetching products:", error);
      setPosts([]); // Set empty array on error
    }

    setLoading(false); // Hide loading spinner
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchProductData();
  }, []); // Empty dependency array = run once on mount

  return (
    <div>
      {/* Conditional rendering based on loading state and data availability */}
      {loading ? (
        // Show spinner while loading if  true go eith first case otherwise second
        <Spinner />
      ) : posts.length > 0 ? (
        // Display products in responsive grid layout
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {/* Map through products and render Product component for each */}
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        // Show message if no products found
        <div className="flex justify-center items-center">
          <p> Oops !! No Data Found :( </p>
        </div>
      )}
    </div>
  );
};

export default Home;
