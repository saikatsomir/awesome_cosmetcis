import image from './images/tab.webp';
import image2 from './images/tab1.webp';
import image3 from './images/tab2.webp';
import image4 from './images/tab3.webp';
import image5 from './images/tab4.webp';
import image6 from './images/tab5.webp';
export const SalesLink = () => {
  return (
    <div className="bg-white py-20">
      <div className="flex justify-between max-w-[1400px] mx-auto ">
        <div className=" py-10 px-12 rounded-xl bg-[#BBEBBD] hover:shadow-lg cursor-pointer">
          <img src={image} alt="" />
          <div className="border border-orange-500 w-5 flex justify-center items-center mx-auto mt-7 mb-4"></div>
          <h1 className="text-black text-center">Skin Care</h1>
        </div>
        <div className=" py-10 px-12 rounded-xl bg-[#F9F6BF] hover:shadow-lg cursor-pointer">
          <img src={image2} alt="" />{' '}
          <div className="border border-orange-500 w-5 flex justify-center items-center mx-auto mt-7 mb-4"></div>
          <h1 className="text-black text-center">Hair Care</h1>
        </div>
        <div className=" py-10 px-12 rounded-xl bg-[#FFF1D8] hover:shadow-lg cursor-pointer">
          <img src={image3} alt="" />
          <div className="border border-orange-500 w-5 flex justify-center items-center mx-auto mt-7 mb-4"></div>
          <h1 className="text-black text-center">Natural Care</h1>
          <h1></h1>
        </div>
        <div className=" py-10 px-12 rounded-xl bg-[#fdd7ee] hover:shadow-lg cursor-pointer">
          <img src={image4} alt="" />
          <div className="border border-orange-500 w-5 flex justify-center items-center mx-auto mt-7 mb-4"></div>
          <h1 className="text-black text-center">Lip Stick</h1>
        </div>
        <div className=" py-10 px-12 rounded-xl bg-[#fde2b7] hover:shadow-lg cursor-pointer">
          <img src={image5} alt="" />
          <div className="border border-orange-500 w-5 flex justify-center items-center mx-auto mt-7 mb-4"></div>
          <h1 className="text-black text-center">Face Skin</h1>
        </div>
        <div className=" py-10 px-12 rounded-xl bg-[#FFF0D8] hover:shadow-lg cursor-pointer">
          <img src={image6} alt=" " className="hover:rotate-180" />{' '}
          <div className="border border-orange-500 w-5 flex justify-center items-center mx-auto mt-7 mb-4"></div>
          <h1 className="text-black text-center ">Brusher</h1>
        </div>
      </div>
    </div>
  );
};
