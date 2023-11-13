import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa6";

export default function Subscribe() {
  return (
    <div className="flex justify-center items-center gap-32 bg-sky-400 text-white p-6">
      <h2>BE IN TOUCH WITH US</h2>
      <div className="flex items-stretch">
        <input type="text" placeholder="Enter your email..." className="rounded-tl-sm rounded-bl-sm h-full p-1 placeholder:text-sm"/>
        <button className="p-1 px-2 bg-gray-800 text-white/70 rounded-tr-sm rounded-br-sm text-xs">JOIN US</button>
      </div>
      <div className="flex justify-between items-center gap-2">
        <AiOutlineFacebook size={25} />
        <AiOutlineInstagram size={25} />
        <AiOutlineTwitter size={25} />
        <FaPinterest size={25} />
      </div>
    </div>
  );
}
