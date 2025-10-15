import React from 'react'
import {  products ,FlashSale} from '../assets/assets'
import { MoveRight} from 'lucide-react';
import ProductCard from '../card/ProductCard';

const Recommended = () => {
  return (
    <div className="container  px-6 ">
      {/* Recommended Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Recommended for you</h2>
          <button className="text-green-600 flex items-center gap-1 text-sm font-medium">
            See all <span className='bg-[#27AE60] p-1 rounded-full'><MoveRight className="w-5  text-white" /></span> 
          </button>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 pb-2 ">
          {products.map((item, index) => (
            <ProductCard key={index} item={item}/>
          ))}
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className=" bg-green-100/50 p-5 rounded-2xl">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-[#F39C12]">Flash Sale</h2>
          <p className="text-sm text-red-500 font-medium space-x-1">
          <span className='bg-red-50 p-1'>02h</span>
          <span className='bg-red-50 p-1'>30m</span>
          <span className='bg-red-50 p-1'>02s</span>
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-5 items-center justify-center pb-2 no-scrollbar">
          {FlashSale.map((item, index) => (
            <ProductCard key={index} item={item}/>
          ))}
        </div>
      </section>

      
    </div>
  )
}

export default Recommended
