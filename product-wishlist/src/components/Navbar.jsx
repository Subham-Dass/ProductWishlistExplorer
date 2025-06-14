import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="px-20 py-10 flex justify-between items-center shadow-lg shadow-gray-200 z-1">
        <Link to={"/"}>
          <div className="cursor-pointer flex justify-between gap-2">
            <img src="https://placehold.co/30x30" alt="" />
            <span className="text-xl font-bold">ProductHub</span>
          </div>
        </Link>
        <div className="flex justify-between gap-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-red-600" : "text-gray-600"
              } transition duration-200 ease-in-out
               hover:text-red-300`
            }
          >
            Products
          </NavLink>
          <NavLink
            to={"/wishlist"}
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-red-600" : "text-gray-600"
              } transition duration-200 ease-in-out 
               hover:text-red-300 before:content-['❤️']`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
