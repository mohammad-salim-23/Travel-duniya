import { NavLink, Link, useParams } from "react-router-dom";
import travel from "../assets/icons/Travel.jpg";
import { useState } from "react";

const Navbar = () => {
  const { id } = useParams();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Search:", searchValue);
  };

  const navLinks = (
    <>
      <li className="hover:border-b-2 border-yellow-300">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:border-b-2 border-yellow-300">
        <NavLink to="/">Blog</NavLink>
      </li>
      <li className="hover:border-b-2 border-yellow-300">
        <NavLink to="/">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <div className="md:space-x-4">
                {navLinks}
              </div>
            </ul>
          </div>
          <img className="w-8 md:w-20" src={travel} alt="" />
        </div>
        <div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">
            <div className="md:space-x-4  md:flex">
              {navLinks}
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login"><button className="btn bg-purple-500 font-bold">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
