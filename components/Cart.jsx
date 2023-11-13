"use client";
import React from "react";
import { removeItem, resetCart } from "@/redux/cartReducer";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const cartTotal = products.reduce((acc, each) => {
    return acc + each.price * each.quantity;
  }, 0);

  async function checkout() {
    const lineItems = products.map(cartItem => {
        return {
            price: cartItem.id,
            quantity: 1
        }
    })
    const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lineItems })
    })
    const data = await res.json()
    router.push(data.session.url)
    dispatch(resetCart())
}

  return (
    <div>
      <div className="w-[450px] bg-gray-100 p-4 absolute top-24 right-0 z-10 shadow-lg">
        <h1 className="text-xl font-medium">Products in your cart</h1>
        {
            products.map((each) => (
            <div key={each?.id} className="flex gap-3 my-4">
                <div className="min-w-[150px] h-[120px]">
                    <img
                        src={process.env.NEXT_PUBLIC_UPLOAD_URL + each?.img}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="w-full">
                    <div className="w-full flex space-between items-center">
                        <h4 className="text-lg text-gray-500">{each?.title}</h4>
                        <MdOutlineDeleteOutline
                        size={25}
                        className=" text-red-800 ml-auto cursor-pointer"
                        onClick={() => dispatch(removeItem(each?.id))}
                        />
                    </div>
                    <div className="flex py-3">
                        <p className="text-sm text-justify ">{each?.desc}</p>
                    </div>
                    <p className="text-sky-500 font-medium">{`${each?.quantity} * $${each?.price}`}</p>
                </div>
            </div>
            ))
        }

        <div className="space-y-3 py-4 border-t-2 border-gray-50">
          <div className="flex justify-between font-bold text-sm">
            <h2>SUBTOTAL</h2>
            <p>${cartTotal}</p>
          </div>
          <button className="bg-sky-600 text-white font-medium text-xs p-2 px-8 tracking-wider" onClick={checkout}>
            PROCEED TO CHECKOUT
          </button>
          <p className="text-sm text-green-700 font-medium cursor-pointer"
             onClick={() => dispatch(resetCart())}>
             RESET CART
          </p>
        </div>
      </div>
    </div>
  );
}
