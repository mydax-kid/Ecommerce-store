"use client";
import React from "react";
import useFetch from "@/hooks/useFetch";
import Card from "./Card";

export default function CategoryList({ catId, rangePrice, sort, subCats }) {
    
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${rangePrice}&sort=price:${sort}`
  );

  return (
    <div className="flex justify-between gap-10 w-full flex-wrap">
      {data?.map((item) => (
        <Card key={item?.id} item={item} />
      ))}
    </div>
  );
}

// `/api/products?subcollection.title=${title}`
// `/api/products?[filters][sub-categories][title][$eq]=${title}`
