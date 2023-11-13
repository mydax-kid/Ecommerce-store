import React from "react";
import axios from "axios";
import Card from "./Card";

const fetchData = async (type) => {
  try {
    const res = await axios.get(
      process.env.API_URL +
        `/products?populate=*&[filters][type][eql=${type}`,
      {
        headers: {
          Authorization: "Bearer " + process.env.API_TOKEN,
        },
      }
    );
    console.log(res.data.data);

    if (res.status !== 200) {
      throw new Error(`Error: Could not fetch data. Status: ${res.status}`);
    }
    return res.data.data;
  } 
  catch (error) {
    console.error("Error:", error.message);
    throw error; // Re-throw the error to be handled by the caller if needed
  }
};


async function ProductList({ type }) {
  const data = await fetchData(type);

  return (
    <div className="mx-8 my-16">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-3xl text-uppercase w-1/3 self-start capitalize font-bold">
          {type} products
        </h1>
        <p className="text-gray-500 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="flex justify-center gap-10">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
