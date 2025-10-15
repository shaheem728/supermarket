import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { ChevronDown } from 'lucide-react';
import QuantityButton from '../Button/QuantityButton';
const ProductCard = ({ item }) => {
    const [qty, setQty] = useState(0);
    return (
        <div className="w-40 h-52 relative bg-white rounded-2xl  ">
            <div className=' bg-[#E5E5E5] w-full h-30 flex items-center justify-center rounded-t-2xl'>
                {/* Discount */}
                <div className="absolute top-0 -left-1.5 w-10 h-10">
                    <img
                        src={assets.OfferTag}
                        alt="offer"
                        className="w-full h-full object-contain"
                        draggable={false}
                    />
                    <span className="absolute top-2 inset-0 flex items-center justify-center text-white text-xs font-semibold pointer-events-none">
                        {item.discount}%
                    </span>
                </div>

                {/* Quantity Button */}
                <div className="absolute top-0 right-0">
                    <QuantityButton
                        value={qty}
                        onIncrease={() => setQty(qty + 1)}
                        onDecrease={() => qty > 0 && setQty(qty - 1)}
                    />
                </div>
                {/* Item Image */}
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 " />
            </div>
            {/* Item Detail */}
            <p className="text-sm font-medium text-gray-800 ms-1 mb-1">
                {item.name}
            </p>

            <p className=" absolute bottom-2 left-2 text-xs text-gray-500  flex">{item.weight}<ChevronDown className='text-green-600 h-5' /></p>
            <div className='absolute bottom-2 right-2 flex flex-col'>
                <div className="text-gray-500 font-semibold text-sm">
                    <del>{item.mrp}</del>
                </div>
                <div className="text-gray-900 font-semibold text-sm">
                    ₹{item.price}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
