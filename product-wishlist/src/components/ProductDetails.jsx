import React from "react";

function ProductDetails() {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="px-8 pt-4 text-sm text-blue-500">← Back to Products</div>
      <div className="flex justify-around">
        <div className="w-1/2 px-8 py-3">
          <img src="https://placehold.co/50x50" alt="" className="w-full h-1/2 mb-2 rounded-md shadow "/>
          <img src="https://placehold.co/10x10" alt="" className="w-15 h-15 rounded-md border border-blue-100 hover:border-blue-400" />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col">
            {/* This is description section */}

            {/* How to apply here shadow for the bottom*/}
            <div className=" p-1 mb-4">
              <div className="bg-indigo-100 inline-block my-2 px-4 rounded-full ">
                <span className="flex align-center text-xs font-medium">
                  beauty
                </span>
              </div>
              <div className="text-2xl font-bold mt-1 mb-2">
                Essence Mascara Lash Princess
              </div>
              <div className="flex justify-start mb-4">
                <div>⭐</div>
                <div className="font-semibold pl-1 ">2.6</div>
                <div className="font-semibold text-gray-400 px-2 ">
                  • 99 in stock
                </div>
              </div>
              <div className="flex justify-start my-4 items-center">
                <div className="text-2xl font-bold text-blue-600">$8.94</div>
                <div className="text-lg font-semibold px-4 line-through text-gray-400">
                  $9.99
                </div>
                <div className="flex bg-red-500 rounded-full h-[14px] items-center">
                  <span className="text-white text-[10px] px-2 font-semibold">
                    -10% OFF
                  </span>
                </div>
              </div>
              <div className="text-md text-gray-400 font-medium mb-6">
                this is description
              </div>
              <div className="flex justify-between  mb-4 ">
                <div className="bg-gray-900 px-17 py-2 w-2/3 rounded text-center ">
                  <span>🛒</span>
                  <span className="text-gray-200 px-3 font-semibold text-sm">
                    Add to Cart
                  </span>
                </div>
                <div className=" bg-white py-2 px-2 rounded ml-2 shadow w-1/3 text-center">
                  <span className="px-1">❤️</span>
                  <span className="font-semibold text-xs px-1">
                    Add to wishlist
                  </span>
                </div>
              </div>
            </div>
            <hr className="text-xs text-gray-100 mb-4" />
            <div className="text-sm mb-2">
              Brand: <span className="font-semibold">Essence</span>
            </div>
          </div>
        <div className="mt-4 bg-white shadow p-4 rounded">
            <form action="">
                
                <div className="text-xl font-semibold mb-2">Intrested in this product?</div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900"> Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-1" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900"> Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-1" />
                </div>
                <div className="mb-5">
                    <label htmlFor="times" className="block mb-2 text-sm font-medium text-gray-900"> Preferred Contact Time (Optional)</label>
                    {/* <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full" /> */}
                    <select id="times" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-1 px-2">
                        <option value="" className="text-sm">Select Preferred Time</option>
                    </select>
                </div>
                <div className="button flex bg-gray-900 text-gray-100 text-xs py-2 justify-center rounded-md font-semibold mb-2">Submit Interest</div>
            </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
