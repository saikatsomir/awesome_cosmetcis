import { useEffect, useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import ReactStars from 'react-rating-stars-component';

export const Sales = () => {
  const [product, setProduct] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product
  console.log(selectedProduct);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  const closeModal = () => {
    setSelectedProduct(null); // Close the modal by resetting the selected product
  };

  return (
    <>
      <div className="bg-white py-20">
        <div className="text-center max-w-screen-lg mx-auto">
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
          <div className="max-w-[1400px] mt-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">
            {product?.slice(0, 12).map((item) => {
              // Extract the last two digits from the id
              const id = item?._id?.toString(); // Convert `id` to string to handle numbers
              const lastTwoDigits = id ? parseInt(id.slice(-2)) : 0; // Default to 0 if `id` is not valid
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
                        <button className="text-white text-3xl">
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
        </div>

        {/* Modal to show selected product details */}
        {selectedProduct && (
          <dialog open id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={closeModal} // Close the modal when clicked
                >
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">{selectedProduct.title}</h3>
              <img
                src={selectedProduct.productUrl}
                alt={selectedProduct.name}
                className="w-full h-auto"
              />
              <p className="py-4">{selectedProduct.description}</p>
              <p className="py-4 text-xl font-semibold">
                {selectedProduct.price}
              </p>
              <ReactStars
                count={5}
                value={parseFloat(selectedProduct.rating)}
                size={20}
                activeColor="#FFA500"
                color2="#e4e5e9"
                isHalf={true}
                edit={false}
              />
            </div>
          </dialog>
        )}
      </div>
    </>
  );
};

export default Sales;
