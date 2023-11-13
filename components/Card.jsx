'use client'
import React from "react";
import Link from "next/link";

const Card = ({ item }) => {

  return (
    <Link href={`/product/${item?.id}`}>
      <div className="w-72 flex flex-col gap-2 mb-10">
        <div className="w-full h-72 overflow-hidden relative group">
          {item?.attributes.isNew && (
            <span className="absolute top-2 left-2 bg-white text-teal-500 p-1 font-semibold text-xs z-10">
              New Season
            </span>
          )}
          <img
            src={process.env.NEXT_PUBLIC_UPLOAD_URL + item?.attributes?.image1?.data?.attributes?.url}
            alt=""
            className="w-full h-full object-cover group-hover:hidden"
          />
          <img
            src={process.env.NEXT_PUBLIC_UPLOAD_URL + item?.attributes?.image2?.data?.attributes?.url}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
        <h2 className="text-base font-normal">{item?.attributes.title}</h2>
        <div className="flex gap-2">
          <h3 className="text-xl font-semibold line-through text-gray-400">
            {item?.attributes.oldPrice || item?.attributes.price + 20}
          </h3>
          <h3 className="text-xl font-semibold">
            ${item?.attributes.price}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
