import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductExplorePage from "./components/ProductExplorerPage";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductExplorePage />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
