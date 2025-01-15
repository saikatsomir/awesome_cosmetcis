import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartBg from './cartbg.jpeg';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../Redux/slices/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalAmount);
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="bg-white">
      <div>
        <div className="py-10 pt-40 bg-[#FFFAEF]">
          <h1 className="text-black text-center text-xl">
            <Link to="/">Home </Link>/ Cart
          </h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="pb-28">
        <div className="overflow-x-auto max-w-screen-xl mx-auto border">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="border-b-1 border-gray-200">
                <th className="w-14 border-r text-lg text-black font-light uppercase"></th>
                <th className="w-[120px] border-r text-lg text-black font-light uppercase text-center">
                  Product
                </th>
                <th className="w-96 border-r text-lg text-black font-light uppercase text-center">
                  Name
                </th>
                <th className="w-32 border-r text-lg text-black font-light uppercase text-center">
                  Price
                </th>
                <th className="w-96 border-r text-lg text-black font-light uppercase text-center">
                  Quantity
                </th>
                <th className="w-28 text-center text-lg text-black font-light uppercase">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItem?.map((dt) => (
                <tr key={dt._id} className="border-b-1 border-gray-200">
                  <th className="border-r text-center text-red-500 text-2xl hover:bg-red-50 hover:text-red-700">
                    <button onClick={() => handleRemove(dt._id)}>X</button>
                  </th>
                  <td className="border-r">
                    <img
                      src={dt.productUrl}
                      alt={dt.title}
                      className="h-28 mx-auto"
                      style={{
                        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
                      }}
                    />
                  </td>
                  <td className="border-r text-black text-center text-lg font-thin">
                    {dt.title}
                  </td>
                  <td className="border-r text-lg text-black text-center">
                    ${dt.price}
                  </td>
                  <td className="border-r">
                    <div
                      className="flex justify-evenly items-center border w-[50%] h-14 rounded-full mx-auto"
                      style={{
                        boxShadow:
                          ' rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                      }}
                    >
                      <button
                        className="text-2xl text-bold text-black"
                        onClick={() => handleDecrease(dt._id)}
                      >
                        -
                      </button>
                      <h1 className="text-2xl text-black">{dt.quantity}</h1>
                      <button
                        className="text-2xl text-bold text-black"
                        onClick={() => handleIncrease(dt._id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-lg text-black text-center">
                    ${(dt.price * dt.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {cartItem.length === 0 && (
            <div
              className="h-[400px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${cartBg})` }}
            >
              <h1 className="text-5xl uppercase text-orange-600 font-bold absolute left-96 top-32">
                Your Cart is Empty
              </h1>
              <h1 className="text-xl text-black capitalize font-normal w-3/6 absolute left-96 top-[180px]">
                Looks like you haven’t added anything yet. Browse products and
                add your favorites to the cart now!
              </h1>
              {/* <img src={cartBg} alt="Empty Cart" /> */}
            </div>
          )}
        </div>
        <div className="flex max-w-screen-xl gap-10 mx-auto mt-28">
          <div className="w-2/4">
            <h1 className="text-2xl text-black uppercase">Coupun</h1>
            <hr />
            <br />
            <div className="flex flex-col">
              <span className="text-sm ">
                Enter your coupun code if you have one
              </span>
              <input
                type="text"
                className="w-3/5 bg-white rounded border h-14 mt-2 placeholder:text-gray-600 px-3"
                placeholder="Coupon Code"
              />
            </div>

            <button className="text-black uppercase border-2 rounded px-7 h-12 mt-3">
              Apply coupon
            </button>
          </div>
          <div className=" w-2/5 bg-gray-50 pt-5 px-3">
            <h1 className="text-2xl text-black uppercase pb-1">cart totals</h1>
            <hr />
            <div className="flex justify-between py-4">
              <h1 className="text-gray-700 text-lg uppercase">Subtotal</h1>
              <h1 className="text-black font-bold text-lg">
                ${totalPrice.toFixed(3)}
              </h1>
            </div>
            <hr />

            <div className="flex justify-between pt-4 ">
              <div>
                <h1 className="text-gray-700 uppercase text-base">Shipping</h1>
              </div>
              <div className="text-end">
                <h1 className="text-black flex items-center gap-2 pt-2 justify-end">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  Flate rate: $3.00
                </h1>
                <h1 className="text-black flex items-center gap-2 pt-2 justify-end">
                  <input type="checkbox" className="checkbox checkbox-xs" />
                  Free Shipping
                </h1>
                <h1 className="text-black flex items-center gap-2 pt-2 justify-end text-end">
                  <input type="checkbox" className="checkbox checkbox-xs" />
                  Local pickup
                </h1>

                <br />
                <br />
                <h1 className="text-black">
                  Shipping to{' '}
                  <span className="text-gray-400 font-bold">USA</span>
                </h1>
                <h1 className="text-black underline text-xs pt-2 pb-4">
                  Cahnge Adress
                </h1>
              </div>
            </div>
            <hr className="py-4" />
            <div className="flex justify-between pb-4">
              <h1 className="text-lg uppercase text-gray-600 font-bold">
                total
              </h1>
              <h1 className="text-lg font-bold text-black ">
                ${(totalPrice + 3).toFixed(3)}
              </h1>
            </div>
            <hr />
            <br />
            <div className="flex justify-end">
              <button className="text-white bg-red-400 hover:opacity-80 px-10 h-12 rounded  uppercase text-xl">
                Proceed to checkout
              </button>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
