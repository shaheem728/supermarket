import React from "react";
import CategoryCard from "../card/CategoryCard";

const CategorySection = ({ title, items }) => {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap    gap-2">
        {items.map((item, index) => (
          <CategoryCard key={index} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
