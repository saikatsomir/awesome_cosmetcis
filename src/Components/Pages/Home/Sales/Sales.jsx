import { useEffect, useState } from 'react';
import bg from './bg.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../Redux/slices/prodcuts';
import { addToCart } from '../../../Redux/slices/cartSlice';

export const Sales = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Handle adding product to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setSuccessMessage(`Added ${item.title} to cart!`);
    setTimeout(() => setSuccessMessage(''), 1000);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    // Close the modal by resetting the selected product
  };

  return (
    <>
      <div className="bg-white py-20 ">
        {successMessage && (
          <div className="bg-green-400 text-white py-5 fixed rounded  top-0 z-30 right-0 px-10">
            {successMessage}
          </div>
        )}
        <div data-aos="zoom-in" className="text-center max-w-screen-lg mx-auto">
          <h1 className="text-black text-5xl font-bold">
            Unmissable Deals of the Season!
          </h1>
          <h1 className="text-gray-600 text-xl pt-5">
            Shop our Top Sales for trending must-haves and unbeatable deals!
            Don’t miss out on luxurious favorites and bestsellers—grab them now
            before they’re gone!
          </h1>
        </div>
        <div>
          <div className="max-w-[1400px] mt-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 place-items-center">
            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' &&
              products?.slice(0, 12).map((item) => {
                const id = item?._id?.toString();
                const lastTwoDigits = id ? parseInt(id.slice(-2)) : 0;
                const aosValue =
                  lastTwoDigits % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left';

                return (
                  <div data-aos={aosValue} key={item._id}>
                    <div className="overflow-hidden rounded-lg group relative">
                      <img
                        src={item.productUrl}
                        alt={item.name}
                        className="hover:scale-110 transition-all duration-1000 cursor-pointer h-96 w-[400px]"
                        onClick={() => setSelectedProduct(item)} // Set the selected product
                      />
                      <div className="absolute bottom-0 -left-0 right-0 flex justify-between px-2 gap-4 transform translate-y-full group-hover:translate-y-0 bg-black/30 py-4 transition-all duration-500">
                        <div>
                          <button
                            onClick={() => setSelectedProduct(item)} // Set the selected product when clicked
                          >
                            <MdOutlineZoomOutMap className="text-white text-3xl" />
                          </button>
                        </div>
                        <div className="flex gap-5">
                          <button
                            className="text-white text-3xl"
                            onClick={() => handleAddToCart(item)} // Add to cart when clicked
                          >
                            <FaShoppingCart
                              className={`${
                                successMessage
                                  ? 'text-orange-500'
                                  : 'text-white'
                              }`}
                            />
                          </button>
                          <button className="text-white text-3xl">
                            <FaHeart />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <ReactStars
                        count={5}
                        value={parseFloat(item.rating)}
                        size={20}
                        activeColor="#FFA500"
                        color2="#e4e5e9"
                        isHalf={true}
                        edit={false}
                      />
                      <p className="text-black text-lg">{item.price}</p>
                    </div>

                    <h2 className="text-xl text-black tracking-wider">
                      {item.title}
                    </h2>
                  </div>
                );
              })}
          </div>

          <div
            className="mt-20 h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <h1
              data-aos="zoom-in-up"
              className="text-7xl uppercase font-bold text-black ml-[400px] pt-20"
              style={{
                textShadow:
                  'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
              }}
            >
              Glow & Grace 🌸
            </h1>
            <h1
              data-aos="zoom-in-up"
              className="w-[800px] ml-[400px] text-2xl text-gray-600 pt-5"
            >
              Embrace your inner beauty with our premium cosmetics, offering
              radiant glow, timeless grace, and luxurious self-care for every
              occasion.
            </h1>
            <button
              data-aos="zoom-in-up"
              className="tracking-widest text-black uppercase text-xl w-[170px] border-2 font-semibold border-black rounded-full py-2 px-4 ml-[400px] mt-5 hover:bg-black hover:text-white duration-500 hover:scale-105 "
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="max-w-[1400px] mt-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">
          {status === 'loading' && <p>Loading...</p>}
          {status === 'succeeded' &&
            products?.slice(13, 21).map((item) => {
              const id = item?._id?.toString();
              const lastTwoDigits = id ? parseInt(id.slice(-2)) : 0;
              const aosValue =
                lastTwoDigits % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left';

              return (
                <div data-aos={aosValue} key={item._id}>
                  <div className="overflow-hidden rounded-lg group relative">
                    <img
                      src={item.productUrl}
                      alt={item.name}
                      className="hover:scale-110 transition-all duration-1000 cursor-pointer h-96"
                      onClick={() => setSelectedProduct(item)} // Set the selected product
                    />
                    <div className="absolute bottom-0 -left-0 right-0 flex justify-between px-2 gap-4 transform translate-y-full group-hover:translate-y-0 bg-black/30 py-4 transition-all duration-500">
                      <div>
                        <button
                          onClick={() => setSelectedProduct(item)} // Set the selected product when clicked
                        >
                          <MdOutlineZoomOutMap className="text-white text-3xl" />
                        </button>
                      </div>
                      <div className="flex gap-5">
                        <button
                          className="text-white text-3xl"
                          onClick={() => handleAddToCart(item)} // Add to cart when clicked
                        >
                          <FaShoppingCart />
                        </button>
                        <button className="text-white text-3xl">
                          <FaHeart />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <ReactStars
                      count={5}
                      value={parseFloat(item.rating)}
                      size={20}
                      activeColor="#FFA500"
                      color2="#e4e5e9"
                      isHalf={true}
                      edit={false}
                    />
                    <p className="text-black text-lg">{item.price}</p>
                  </div>

                  <h2 className="text-xl text-black tracking-wider">
                    {item.title}
                  </h2>
                </div>
              );
            })}
        </div>

        {/* Modal to show selected product details */}
        {selectedProduct && (
          <dialog
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            open
            id="my_modal_3"
            className="modal"
          >
            <div className="modal-box bg-[#D8F1E1] max-w-4xl w-full">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black text-white hover:bg-white hover:text-black"
                  onClick={closeModal} // Close the modal when clicked
                >
                  ✕
                </button>
              </form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <img
                    className="w-full h-[400px] object-cover"
                    src={selectedProduct.productUrl}
                    alt={selectedProduct.name}
                  />
                </div>
                <div className="mt-5 md:mt-0">
                  <h2 className="text-2xl font-bold text-black">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-lg text-gray-700 mt-2">
                    {selectedProduct.description}
                  </p>
                  <h3 className="text-xl text-gray-800 mt-5">
                    Price: {selectedProduct.price}
                  </h3>
                  <div className="mt-4">
                    <button
                      className="bg-black text-white py-2 px-4 rounded-full"
                      onClick={() => handleAddToCart(selectedProduct)} // Add to cart inside modal
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </>
  );
};
