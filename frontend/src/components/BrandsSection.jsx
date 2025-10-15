import React from 'react'
import { brands } from '../assets/assets'

function BrandsSection() {
    return (
        <section className=' px-6 py-8'>
            <h2 className="text-lg font-semibold mb-4">Top Brands</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center bg-white rounded-lg h-32 border border-[#27AE60] "
                    >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="h-20 object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BrandsSection
