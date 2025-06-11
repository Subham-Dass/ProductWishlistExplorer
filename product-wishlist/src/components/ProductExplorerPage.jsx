import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from 'axios'

const ProductExplorePage = () => {
  const iter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect( ()=> {

    let getdata = async() => {
      try{
        let res = await axios.get('https://dummyjson.com/products')
        let val = res.data
        // console.log(val.products)
        setData(val.products)
    }
    catch(err){
      setError(err.message)
    }
    }

    getdata()
    
  },[])
  // console.log(data)
  const handleClick = () => {
    console.log('clicked')
  }

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
            <span>Showing 20 of {data.length} products</span>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {/* {iter.map((_, i) => (
                <ProductCard key={i} />
              ))} */}
              
              {
                data.length > 0  ?
                data.map((item)=> {
                      // console.log(item.images[0])
                      return(

                        <ProductCard key={item.id} data={item} handleClick={handleClick}/>
                      )
                    // console.log(item.id , category , description, discountPercentage, price, rating, images[0])
                    // console.log(item.)
                    }) : "Loading..."
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductExplorePage;
