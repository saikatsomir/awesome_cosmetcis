import { Link } from 'react-router';
import bannerText from './images/text.svg';
import bannerImg from './images/img1.webp';
import text2 from './images/text2.webp';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
export const Banner = () => {
  return (
    <div className="min-w-2xl w-full bg-[linear-gradient(to_right,_#FAFAFA_50%,_#D9F1E1_50%)] h-screen pt-28 inset-0 -z-10 relative">
      <div className=" ">
        <div class="flex w-72  -left-16 absolute bottom-52  -rotate-90 items-center my-8">
          <div class="flex-grow border-t border-orange-500"></div>
          <span class="mx-4 text-gray-500">Jan / 01 /2025</span>
          <div class="flex-grow border-t border-orange-500"></div>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div className="w-[40%]  relative">
          <img
            data-aos="fade-right"
            src={bannerText}
            alt="banner"
            className=" absolute inset-0 z-0 -rotate-6 -top-44 -left-10"
          />
          <div
            className="relative z-10 p-4 -top-0  pl-0 pb-12"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <h1 className="text-7xl font-bold uppercase text-black">
              Clean fresh
            </h1>
            <h1 className="text-start text-xl text-gray-600 w-[70%] pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </h1>
          </div>
          <div data-aos="zoom-out-up">
            <Link to="/shop">
              <button
                href=""
                className="uppercase text-base tracking-[8px] cursor-pointer  border-[2px] border-gray-600 rounded-full  py-3.5 px-6"
              >
                Buy now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[50%]   -ml-60" data-aos="fade-left">
          <img src={bannerImg} alt="banner" width={'800px'} className="" />
        </div>
        <img
          data-aos="fade-up"
          className="absolute right-60 w-14   "
          src={text2}
          alt=""
        />
      </div>

      <div data-aos="zoom-in" className=" ">
        <div class="flex w-[700px] h-20  border-black -right-[235px]   absolute bottom-72  -rotate-90 items-center my-8">
          <span class="mx-4  flex flex-row-reverse gap-8 text-2xl text-orange-500">
            {' '}
            <FaFacebookF className="animate-pulse" />
            <FaSquareInstagram className="animate-pulse" />
            <FaYoutube className="animate-pulse" />
          </span>
          <div class="flex-grow border-t border-gray-500 w-full"></div>
        </div>
      </div>
    </div>
  );
};
