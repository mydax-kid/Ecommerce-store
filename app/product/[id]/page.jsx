"use client";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import { useParams } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCartDownload } from "react-icons/bi";
import { FaBalanceScale } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartReducer";

export default function SingleProduct() {
  const params = useParams();
  const productId = parseInt(params.id);

  const [selectedImg, setSelectedImg] = useState("image1");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  const dispatch = useDispatch();

  if (loading)
    return (
      <div className="h-screen w-full grid place-items-center text-4xl font-bold">
        Loading...
      </div>
    );

  return (
    <div className="flex gap-6 py-4 relative">
      <div className="w-1/2 h-[70vh] flex gap-2">
        <div className="w-[20%] space-y-2">
          <img
            src={
              process.env.NEXT_PUBLIC_UPLOAD_URL +
              data?.attributes?.image1?.data?.attributes?.url
            }
            alt=""
            className="h-[120px] w-full object-cover"
            onClick={() => setSelectedImg("image1")}
          />
          <img
            src={
              process.env.NEXT_PUBLIC_UPLOAD_URL +
              data?.attributes?.image2?.data?.attributes?.url
            }
            alt=""
            className="h-[120px] w-full object-cover"
            onClick={() => setSelectedImg("image2")}
          />
        </div>
        <div className="w-[80%] ">
          <img
            src={
              process.env.NEXT_PUBLIC_UPLOAD_URL +
              data?.attributes[selectedImg]?.data?.attributes?.url
            }
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-1/2 space-y-5">
        <h1 className="text-3xl font-bold">{data?.attributes.title}</h1>
        <h1 className="text-3xl text-sky-400 font-medium">
          ${data?.attributes.price}
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          recusandae ipsam veniam molestiae nostrum? Aliquam, temporibus eos
          debitis magnam maiores aperiam reprehenderit.
        </p>
        <div className="flex">
          <button
            className="p-2 px-4 bg-gray-200"
            onClick={() =>
              setQuantity((value) => (value == 1 ? value : value - 1))
            }
          >
            -
          </button>
          <span className="inline-block p-1 px-3 font-medium">{quantity}</span>
          <button
            className="p-2 px-4 bg-gray-200 font-medium"
            onClick={() => setQuantity((value) => value + 1)}
          >
            +
          </button>
        </div>
        <button className="bg-sky-500 py-3 px-12 text-white flex items-center gap-2">
          <BiCartDownload size={20} className="inline-block" />
          <p className="text-sm"
            onClick={() =>
            dispatch(
                addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.description,
                price: data.attributes.price,
                img: data.attributes.image1.data.attributes.url,
                quantity,
                })
            )
            }
          >ADD TO CART</p>
        </button>
        <div className="flex items-center gap-4 text-sky-500 text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <AiOutlineHeart />
            <p>ADD TO WISHLIST</p>
          </div>
          <div className="flex items-center gap-1.5">
            <FaBalanceScale />
            <p>ADD TO COMPARE</p>
          </div>
        </div>
        <div className="text-sm text-gray-400 font-medium space-y-1.5 border-b-2 border-gray-100 py-4">
          <p>Vendor: Polo</p>
          <p>Product Type: T-Shirt</p>
          <p>Tag: T-Shirt, Men, Top</p>
        </div>
        <div className="text-sm text-gray-400 font-medium space-y-1.5 ">
          <p>DESCRIPTION</p>
          <p className="border-y-2 border-gray-100 py-2 w-max">
            ADDITIONAL INFORMATION
          </p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
}
