"use client";
import { Suspense } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import CategoryList from "@/components/CategoryList";
import Loading from "@/app/loading";

export default function CategoryPage() {
  const params = useParams();
  const catId = parseInt(params.id);

  const collectionName = useSearchParams().get("collection");

  const [sort, setSort] = useState('asc');
  const [rangePrice, setRangePrice] = useState(60);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  //return subcategories where the category id = catId
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };


  return (
    <div className="py-12 flex ">
      <div className="space-y-4 w-[25%]">
        <div>
          <h1 className="font-medium text-lg">Product Categories</h1>
          {data?.map((item) => (
            <div key={item.id} className="py-0.5 space-x-2">
              <input
                type="checkbox"
                id={item?.id}
                value={item?.id || 1}
                onChange={handleChange}
              />
              <label htmlFor={item?.id}>{item?.attributes.title}</label>
            </div>
          ))}
        </div>

        <div>
          <h1 className="font-medium text-lg">Filter by price</h1>
          {"0"}
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setRangePrice(e.target.value)}
            className="py-2"
          />
          {` ${rangePrice}`}
        </div>
        <div>
          <h1 className="font-medium text-lg">Sort by</h1>
          <div className="py-2  space-x-2">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Low to High)</label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (High to Low)</label>
          </div>
        </div>
      </div>

      <div className="w-[75%]">
        <div className="h-[350px] mb-8 relative">
          <img
            src="https://images.unsplash.com/photo-1494607239400-ff147da48308?auto=format&fit=crop&q=80&w=2059&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <span className="absolute inline-block top-4 left-4 text-5xl text-white font-bold">{collectionName || "All Products"}</span>
        </div>

        <Suspense fallback={<Loading/>}>
            <CategoryList
            catId={catId}
            rangePrice={rangePrice}
            sort={sort}
            subCats={selectedSubCats}
            />
        </Suspense>
      </div>
    </div>
  );
}

















// const data = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1920&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     img2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Long Sleeve Graphic T-shirt",
//     isNew: true,
//     oldPrice: 20,
//     price: 12,
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1920&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     img2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Short Sleeve Printed Shirt",
//     isNew: false,
//     oldPrice: 25,
//     price: 18,
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1920&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     img2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Casual Denim Jacket",
//     isNew: false,
//     oldPrice: 45,
//     price: 35,
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1920&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     img2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Slim Fit Jeans",
//     isNew: true,
//     oldPrice: 30,
//     price: 22,
//   },
// ];

{
  /* <div className="w-full">
          <div className="flex justify-between gap-10 w-full flex-wrap">
            {data?.map((item) => (
              <Card item={item} key={item?.id} />
            ))}
          </div>
        </div> */
}
