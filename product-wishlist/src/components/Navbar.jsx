const Navbar = () => {
  return (
    <>
      <div className="px-20 py-10 flex justify-between items-center">
        <div className="cursor-pointer flex justify-between gap-2">
          <img src="https://placehold.co/30x30" alt="" />
          <span className="text-xl font-bold">ProductHub</span>
        </div>
        <div className="flex justify-between gap-5">
          <button className="cursor-pointer hover: ">Products</button>
          <button className="cursor-pointer before:content-['❤️']">Wishlist</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
