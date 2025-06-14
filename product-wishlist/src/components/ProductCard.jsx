import { useNavigate } from "react-router";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  function showDetails(id) {
    navigate("/product-details/" + id);
  }

  let originalPrice = (
    data.price /
    (1 - data.discountPercentage / 100)
  ).toFixed(2);

  return (
    <>
      <div
        className="bg-white h-auto flex flex-col rounded shadow p-5 gap-2"
        onClick={showDetails.bind(this,data.id)}
      >
        <span className="px-2 rounded-full bg-red-500 text-white absolute ml-2 mt-2 w-fit text-sm">
          -{data.discountPercentage}%
        </span>
        <img src={data.images[0]} alt="" className="w-70 " />
        <span className="px-3 py-1 bg-gray-50 rounded-full w-fit text-sm">
          {data.category}
        </span>
        <span className="text-lg font-semibold">{data.title}</span>
        <span className="text-xs text-gray-500">⭐ {data.rating}</span>
        <span className="text-xl text-blue-700 mt-3 font-bold">
          ${data.price}{" "}
          <span className="text-sm text-gray-700 line-through font-semibold">
            ${originalPrice}
          </span>
        </span>
      </div>
    </>
  );
};

export default ProductCard;
