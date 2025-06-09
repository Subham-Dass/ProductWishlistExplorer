import ProductCard from "./ProductCard";

const ProductExplorePage = () => {
  const iter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="bg-gray-50 h-full py-20">
        <div className="flex flex-col gap-5 justify-center items-center">
          <span className="text-4xl font-bold">Product Explorer</span>
          <span className="text-xl">
            Discover amazing products and add them to your wishlist
          </span>
          <input type="text" placeholder="Search for products..."></input>
        </div>

        {/* Products Container */}
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="">
            <span>Showing 20 of 189 products</span>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {iter.map((_, i) => (
                <ProductCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductExplorePage;
