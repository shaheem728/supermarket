import React from 'react'
import { Minus,Plus } from 'lucide-react';
const QuantityButton = ({ value, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-1 bg-white border border-green-600 rounded-md  shadow-sm">
      {/* Decrease */}
      <button
        onClick={onDecrease}
        className={`${value=="0"?"hidden":''} text-xl font-bold px-1`}
      >
       <Minus className='text-green-600 h-5 w-5'/>
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
        <Plus className='text-green-600 h-5 w-5'/>
      </button>
    </div>
  );
};

export default QuantityButton;
