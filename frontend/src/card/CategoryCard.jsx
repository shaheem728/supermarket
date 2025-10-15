import React from "react";

const CategoryCard = ({ img, title }) => {
  return (
    <div className="w-28 h-32 bg-[#27AE601A] rounded-lg flex flex-col  justify-center text-center p-1 ">
      <p className="text-sm text-center font-medium">{title}</p>
      <img src={img} alt={title} className="w-full h-[60%] object-contain  my-1" />
    </div>
  );
};

export default CategoryCard;
