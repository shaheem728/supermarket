import React from 'react'
import CategorySection from './CategorySection'
import { babyKids, groceriesKitchen } from '../assets/assets'

const Categories = () => {
  return (
    <div className="w-full p-10">
      <CategorySection title="Groceries & Kitchen" items={groceriesKitchen} />
      <CategorySection title="Baby & Kids" items={babyKids} />
    </div>
  )
}

export default Categories
