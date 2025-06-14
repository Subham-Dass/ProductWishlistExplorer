import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
const ProductDetails = () => {
  const params = useParams();

  const [data, setData] = useState(null);
  const [imgLink, setImgLink] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const navigate = useNavigate();

  const goToWishlist = () => {
    navigate("/wishlist");
  };

  // console.log(  "this is price")
  useEffect(() => {
    let getdata = async () => {
      try {
        let res = await axios.get(
          "https://dummyjson.com/products/" + params.id
        );
        let val = res.data;
        val && setData(val);
        localStorage.getItem(val.id) && setIsWishlisted(true);
      } catch (err) {
        console.log(err.message);
      }
    };
    getdata();
  }, []);

  const addToWishlist = () => {
    const tempData = { ...data };
    const date = new Date();
    tempData["addedDate"] =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    localStorage.setItem(tempData.id, JSON.stringify(tempData));

    setIsWishlisted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 mt-3 px-10">
      <Link to="/" className="px-8 pt-4 text-sm text-blue-500">
        ← Back to Products
      </Link>
      {data && (
        <div className="flex justify-around">
          <div className="w-1/2 px-8 py-3">
            <img
              src={imgLink || data.images[0]}
              alt=""
              className="w-full h-1/2 mb-2 rounded-md shadow "
            />

            <div className="flex gap-2 cursor-pointer">
              {data.images.map((image, i) => {
                return (
                  <img
                    key={i}
                    onClick={() => setImgLink(data.images[i])}
                    src={image}
                    alt=""
                    className={`w-15 h-15 rounded-md border ${
                      imgLink === image ? "border-blue-400" : "border-blue-100"
                    } `}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col">
              {/* This is description section */}

              {/* How to apply here shadow for the bottom*/}
              <div className=" p-1 mb-4">
                <div className="flex gap-2">
                  {data.tags.map((item, i) => {
                    return (
                      <span
                        key={i}
                        className="bg-indigo-100 inline-block my-2 px-4 rounded-full"
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
                <div className="text-2xl font-bold mt-1 mb-2">{data.title}</div>
                <div className="flex justify-start mb-4">
                  <div>⭐</div>
                  <div className="font-semibold pl-1 ">{data.rating}</div>
                  <div className="font-semibold text-gray-400 px-2 ">
                    • {data.stock} in stock
                  </div>
                </div>
                <div className="flex justify-start my-4 items-center">
                  <div className="text-2xl font-bold text-blue-600">
                    $
                    {(
                      data.price -
                      data.price * data.discountPercentage * 0.01
                    ).toFixed(2)}
                  </div>
                  <div className="text-lg font-semibold px-4 line-through text-gray-400">
                    ${data.price}
                  </div>
                  <div className="flex bg-red-500 rounded-full h-[14px] items-center">
                    <span className="text-white text-[10px] px-2 font-semibold">
                      -{data.discountPercentage}% OFF
                    </span>
                  </div>
                </div>
                <div className="text-md text-gray-400 font-medium mb-6">
                  {data.description}
                </div>
                <div className="flex justify-between mb-4">
                  <button className="bg-gray-900 hover:bg-gray-700 cursor-pointer px-17 py-2 w-2/3 rounded text-center text-white text-sm">
                    🛒 Add to Cart
                  </button>
                  {!isWishlisted && (
                    <button
                      className="bg-white hover:bg-gray-200 cursor-pointer py-2 px-2 rounded ml-2 shadow w-1/3 text-center text-sm font-semibold"
                      onClick={addToWishlist}
                    >
                      ❤️Add to wishlist
                    </button>
                  )}
                  {isWishlisted && (
                    <button
                      className="bg-white hover:bg-gray-200 cursor-pointer py-2 px-2 rounded ml-2 shadow w-1/3 text-center text-sm font-semibold"
                      onClick={goToWishlist}
                    >
                      Go to wishlist
                    </button>
                  )}
                </div>
              </div>
              <hr className="text-xs text-gray-100 mb-4" />
              <div className="text-sm mb-2">
                Brand: <span className="font-semibold">{data.brand}</span>
              </div>
            </div>
            <div className="mt-4 bg-white shadow p-4 rounded">
              <form action="">
                <div className="text-xl font-semibold mb-2">
                  Intrested in this product?
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-1"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-1"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="times"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Preferred Contact Time (Optional)
                  </label>
                  {/* <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full" /> */}
                  <select
                    id="times"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-1 px-2"
                  >
                    <option value="" className="text-sm">
                      Select Preferred Time
                    </option>
                  </select>
                </div>
                <div className="button flex bg-gray-900 text-gray-100 text-xs py-2 justify-center rounded-md font-semibold mb-2">
                  Submit Interest
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {!data && <div>Loading.....</div>}
    </div>
  );
};

export default ProductDetails;
