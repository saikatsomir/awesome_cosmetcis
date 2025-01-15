import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartLength = useSelector((state) => state.cart.items.length);

  return (
    <nav className="fixed w-full  shadow-lg opacity-80 bg-[linear-gradient(to_right,_#FAFAFA_50%,_#D9F1E1_50%)] z-20 ">
      <div className="flex items-center justify-between container mx-auto px-4 py-3">
        {/* Logo */}
        <Link data-aos="fade-right" to="/">
          <img src="/logo.svg" alt="Logo" className="w-[150px] md:w-[250px]" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Links for larger screens */}
        <div
          data-aos="fade-up"
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute z-10 top-full left-0 w-full  md:block md:static md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-14 items-center text-xl py-4 md:py-0 text-black">
            <li>
              <NavLink to="/" exact activeClassName="text-blue-500">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" activeClassName="text-blue-500">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeClassName="text-blue-500">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="text-blue-500">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="text-blue-500">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div
          data-aos="fade-left"
          className="hidden 2xl:flex items-center gap-6 text-2xl text-black"
        >
          <IoSearch />

          <Link to="/cart">
            <div className="indicator">
              <FaShoppingCart />
              <span className="badge badge-sm bg-[#F0B2B5] text-black border-none indicator-item cursor-pointer">
                {cartLength}
              </span>
            </div>
          </Link>
          <Link>
            <FaUser />
          </Link>
        </div>
      </div>

      {/* Icons for mobile */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } flex flex-row justify-evenly gap-6 items-center text-2xl py-4 bg-white md:hidden`}
      >
        <IoSearch />
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <FaUser />
      </div>
    </nav>
  );
};

export default Navbar;
