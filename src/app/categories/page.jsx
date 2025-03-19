import Link from 'next/link';
import React from 'react'

const items = [
  {
    id: 1,
    name: "olma",
    price: 10,
    quantity: 5
  },
  {
    id: 2,
    name: "behi",
    price: 5,
    quantity: 3
  },
  {
    id: 3,
    name: "apelsin",
    price: 8,
    quantity: 2
  }
]

function CategoriesPage() {
  return (
    <div>
      <div className='flex gap-8 border mx-auto w-[500px]'>
        {
          items.map((item) => (
            <div key={item.name}>
              <h2>{item.name}</h2>
              <p>Price: {item.price} kr</p>
              <p>Quantity: {item.quantity}</p>
              <Link href={`/categories/${item.id}`}>Bosish</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}


export default CategoriesPage