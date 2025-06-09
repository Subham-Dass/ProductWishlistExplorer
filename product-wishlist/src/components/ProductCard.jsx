const ProductCard = (data) => {
  return (
    <>
      <div className="bg-white h-auto flex flex-col rounded shadow p-5 gap-2">
        <span className="px-2 rounded-full bg-red-500 text-white absolute ml-2 mt-2 w-fit text-sm">
          -10%
        </span>
        <img src="https://placehold.co/50x50" alt="" />
        <span className="px-3 py-1 bg-gray-50 rounded-full w-fit text-sm">beauty</span>
        <span className="text-lg font-semibold">
          Essence Mascara Lash Princess
        </span>
        <span className="text-xs text-gray-500">⭐ 2.6</span>
        <span className="text-xl text-blue-700 mt-3 font-bold">
          $8.94{" "}
          <span className="text-sm text-gray-700 line-through font-semibold">
            $9.99
          </span>
        </span>
      </div>
    </>
  );
};

export default ProductCard;
