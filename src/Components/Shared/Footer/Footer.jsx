import { FaFacebookF, FaShoppingCart, FaUser, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="bg-[#FAFAFA] pt-24 pb-16">
      <footer className=" flex  text-base-content  justify-between max-w-[1440px] mx-auto">
        <div className="w-[30%] flex flex-col gap-4 justify-start ">
          <Link className="flex  flex-col ">
            <img src="/logoIcon.svg" className="w-[70px] mx-auto" alt="" />
            <img src="/logoText.png" className="w-52 -mt-4 mx-auto" alt="" />
          </Link>
          <h1 className="text-xl leading-9 text-gray-600 -mt-5 text-center">
            Enhancing Your Natural Beauty with Luxurious, Cruelty-Free Cosmetics
          </h1>
        </div>
        <nav className="w-[30%] flex flex-col gap-6">
          <h6 className="text-3xl uppercase text-black font-semibold">
            Company
          </h6>

          <div className="flex justify-between mt-3 ">
            <a className="link link-hover w-[30%]  text-gray-600">Home</a>
            <a className="link link-hover w-[40%]  text-gray-600">Our Shop</a>
            <a className="link link-hover w-[30%]  text-gray-600">About</a>
          </div>
          <div className="flex justify-between ">
            <a className="link link-hover text-gray-600 w-[30%]">Contacts</a>
            <a className="link link-hover text-gray-600 w-[40%]">Blog</a>
            <a className="link link-hover text-gray-600 w-[30%]">FAQ</a>
          </div>
          <div className="flex  justify-between ">
            <a className="link link-hover text-gray-600 w-[30%]">
              Privacy Policy
            </a>
            <a className="link link-hover text-gray-600 w-[40%]">
              Terms & Conditions
            </a>
            <a className="link link-hover text-gray-600 w-[30%]">Login</a>
          </div>
        </nav>
        <nav className="flex flex-col  ">
          <h6 className="text-3xl uppercase text-black font-semibold">
            Company
          </h6>{' '}
          <div className="flex flex-col gap-5 mx-auto pt-5">
            <FaFacebookF className="text-2xl text-black" />
            <FaSquareInstagram className="text-2xl text-black" />
            <FaYoutube className="text-2xl text-black" />
          </div>
        </nav>
      </footer>
    </div>
  );
};
