import React from 'react'
import { Minus,Plus } from 'lucide-react';
const QuantityButton = ({ value, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-1 bg-white p-1 border border-green-600  rounded-lg  shadow-sm">
      {/* Decrease */}
      <button
        onClick={onDecrease}
        className={`${value=="0"?"hidden":''} text-xl font-bold px-1`}
      >
       <Minus className='text-green-600 h-4 w-4'/>
      </button>

      {/* Value */}
      <span className={`${value=="0"?"hidden":''} text-sm font-semibold w-6 text-center`}>
        {value.toString().padStart(2, "0")}
      </span>

      {/* Increase */}
      <button
        onClick={onIncrease}
        className="text-xl font-bold px-1"
      >
        <Plus className='text-green-600 h-4 w-4'/>
      </button>
    </div>
  );
};

export default QuantityButton;
