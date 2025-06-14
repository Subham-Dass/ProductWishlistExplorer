import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

function Wishlist() {
  let [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataFromLocal();
  }, []);

  const fetchDataFromLocal = async () => {
    try {
      const localData = await { ...localStorage };
      data = [];

      Object.values(localData).map((item) => {
        data.push(JSON.parse(item));
        setData(data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromWishlist = (item) => {
    localStorage.removeItem(item.id);

    fetchDataFromLocal();
  };

  const goToProductDetails = (item) => {
    navigate("/product-details/" + item.id);
  };

  const ItemCard = ({ item }) => {
    return (
      <div className="item-card items-center flex gap-2 border-gray-100 shadow-sm p-3 rounded w-full justify-between">
        <div className="flex gap-3">
          <img
            src={item.thumbnail}
            alt=""
            className="w-1/10 cursor-pointer"
            onClick={goToProductDetails.bind(this, item)}
          />
          <div className="flex flex-col gap-0.5">
            <span
              className="text-xl font-bold cursor-pointer"
              onClick={goToProductDetails.bind(this, item)}
            >
              {item.title}
            </span>
            <span className="text-sm text-gray-400">
              Added {item.addedDate}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-blue-600 text-2xl">
            ${item.price}
          </span>
          <div className="flex gap-1.5 mt-2 justify-end">
            <button className=" border-1 rounded border-gray-200 text-sm p-2 cursor-pointer hover:bg-black hover:text-white">
              🛒 Add to Cart
            </button>
            <button
              className=" bg-red-600 rounded text-sm p-1 cursor-pointer hover:bg-red-800"
              onClick={removeFromWishlist.bind(this, item)}
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="wishlist-wrapper px-20 py-10">
        <Link to={"/"}>
          <div className="text-blue-500 mb-5">⬅️ Back to Products</div>
        </Link>

        <div className="flex flex-col gap-2 items-start">
          <div className="flex flex-col mb-5 gap-1">
            <span className="text-3xl font-bold">My Wishlist</span>
            <span className="text-gray-400 text-sm">
              You have {data.length} items in your wishlist
            </span>
          </div>

          <div className="item-card-wrapper w-full">
            {data.length > 0 && data.map((item) => <ItemCard item={item} />)}

            {!(data.length > 0) && <div>Add Products to your Wishlist</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
