import subscribe from './subscribe.webp';

export const Subscription = () => {
  return (
    <div className="bg-white py-10">
      <div
        className="bg-white bg-contain rounded-2xl h-52 max-w-[1400px] w-full mx-auto p-5 flex items-center justify-evenly py-5"
        style={{ backgroundImage: `url(${subscribe})` }}
      >
        <div className="w-[40%]" data-aos="fade-right">
          <h1 className="text-black text-5xl font-semibold capitalize">
            Join with us
          </h1>
          <h1 className="text-gray-600 text-lg  w-[80%] pt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero at,
            eligendi nostrum itaque eaque animi quod vel amet voluptates nihil.
          </h1>
        </div>
        <div className="flex items-center" data-aos="fade-left">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[300px]  rounded px-3 h-12 border bg-white outline-none border-r-0 rounded-r-none border-white"
          />
          <button className="uppercase tracking-widest text-xl border  border-white h-12 text-black px-3 border-l-0 hover:bg-black hover:text-white duration-500">
            Subscribe
          </button>{' '}
        </div>
      </div>
    </div>
  );
};
