import { Link } from 'react-router-dom';
import blog1 from './images/1.webp';
import blog2 from './images/2.webp';
import blog3 from './images/3.webp';
export const SharedBlog = () => {
  return (
    <div className="bg-white py-10">
      <div className="min-h-[700px] h-full max-w-[1400px] w-full bg-white mx-auto ">
        <div data-aos="zoom-in" className="mx-auto w-[60%] my-10">
          <h1 className="text-5xl text-black font-bold  text-center">
            Blog Posts
          </h1>
          <h1 className="text-xl text-gray-600 text-center pt-4">
            Discover the secrets to flawless skin and a radiant glow with our
            expert tips, must-have products, and beauty routines.
          </h1>
        </div>
        <div className="flex justify-between pt-5">
          <Link data-aos="zoom-in-right" className="w-[400px]">
            <img
              src={blog1}
              className="rounded-lg w-[400px] h-[300px] hover:rounded-lg hover:scale-105 hover:rotate-1 hover:shadow-lg transition-all duration-300 ease-in-out"
              alt=""
            />
            <button className="uppercase tracking-widest text-xl rounded-full w-[150px] mt-7 bg-pink-300 py-2 text-black border-black">
              Beauty
            </button>
            <h1 className="text-2xl font-semibold text-black pt-3">
              Lorem ipsum dolor sit amet, ctetur adipiscing elit
            </h1>
          </Link>

          <Link data-aos="zoom-out-up" className="w-[400px]">
            <img
              src={blog2}
              className="rounded-lg w-[400px] h-[300px] hover:rounded-lg hover:scale-105 hover:rotate-1 hover:shadow-lg transition-all duration-300 ease-in-out"
              alt=""
            />
            <button className="uppercase tracking-widest text-xl rounded-full w-[150px]  mt-7 bg-green-300 py-2 text-black border-black">
              Beauty
            </button>
            <h1 className="text-2xl font-semibold capitalize text-black pt-3">
              Aliquid fugiat quam adipisci ea praesentium magnam quae
            </h1>
          </Link>
          <Link data-aos="zoom-in-right" className="w-[400px]">
            <img
              src={blog3}
              className=" rounded-lg w-[400px] h-[300px] hover:rounded-lg hover:scale-105 hover:rotate-1 hover:shadow-lg transition-all duration-300 ease-in-out"
              alt=""
            />
            <button className="uppercase tracking-widest text-xl rounded-full w-[150px]  mt-7 bg-indigo-300 py-2 text-black border-black">
              Beauty
            </button>
            <h1 className="text-2xl font-semibold text-black pt-3 capitalize">
              assumenda illum quibusdam esse animi cupiditate
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
