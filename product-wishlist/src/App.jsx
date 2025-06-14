import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductExplorePage from "./components/ProductExplorerPage";
import ProductDetails from "./components/ProductDetails";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <>
      <Navbar />
      <div className="shadow-lg shadow-gray-400"></div>
      <Routes>
        <Route path="/" element={<ProductExplorePage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
