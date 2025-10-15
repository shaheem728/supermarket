import React from "react";
import { assets,categories,offers,features } from "../assets/assets";

const Home = () => {
  return (
    <div className="w-full  p-6 space-y-10">
      {/* Category Slider */}
      <div className="flex flex-wrap md:flex-nowrap gap-1 md:gap-3">
        {categories.map((cat, idx) => (
          <div key={idx} className="w-32 bg-white rounded-xl shadow p-2 flex flex-col items-center relative">
            <p className="text-sm font-medium  text-center mt-1">{cat.title}</p>
            <img src={cat.img} alt={cat.title} className="h-16 object-contain" />
            <img src={assets.Ellipse} alt="Ellipse" className="absolute bottom-0 z-10" />
          </div>
        ))}
      </div>

      {/* Main Banner */}
        <div
        className="w-full  rounded-2xl flex items-center justify-between px-10 py-16"
        style={{
          background: `linear-gradient(to right, #6D62CA 50% , #FFFFFF00), url(${assets.HomeBanner})`,
          backgroundPosition:"right",
          backgroundSize:"100%,60%",
          backgroundRepeat:"no-repeat"
        }}
      >
        <div className="text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Best Home Deals</h2>
          <p className="text-2xl md:text-4xl font-bold">40% OFF</p>
        </div>
      </div>


      {/* Offer Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {offers.map((offer, idx) => (
          <div key={idx} className={` ${offer.bg} rounded-xl  flex justify-between items-center`}>
            <div className="p-4 w-3/5 flex-1">
              <h3 className={`font-bold ${offer.clr} `}>{offer.title}</h3>
              <p className="text-sm text-gray-600">{offer.sub}</p>
              <button className={`mt-2 md:px-4 px-1 py-1 rounded-md text-sm ${offer.btn}`}>Order Now</button>
            </div>
            <img src={offer.img} alt={offer.title} className="flex-1  h-30 w-auto overflow-hidden " />
          </div> 
        ))}
      </div>

      {/* AI Assistant Section */}
      <div className="w-full md:w-[55%] bg-orange-100 rounded-2xl p-4">
        <div className="flex md:flex-row flex-col justify-between space-x-3 ">
          <div className="w-2/5 mb-1">
            <h2 className="text-xl font-bold mt-3">Your personal grocery assistant</h2>
            <p className="text-sm text-gray-600 mt-1">
              Find recipes, get recommendations, and shop smarter with AI
            </p>
            <button className="mt-4 mb-1 bg-yellow-500 text-white px-6 py-1 rounded-lg">Try Now</button>
          </div>

          <div className=" w-auto h-40  flex gap-2 ">
            {features.map((f, idx) => (
              <div key={idx} className="bg-white p-1 rounded-lg  flex flex-col items-center  relative">
                <p className="text-sm font-medium  ">{f.title}</p>
                <img src={f.img} alt={f.title} className="h-20" />
                <button className="absolute bottom-1 mt-1 w-10/12 py-1 rounded-lg text-sm font-medium bg-orange-100 text-orange-500 ">{f.btn}</button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
