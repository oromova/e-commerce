"use client";

import useCartStore from '@/store/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import like from '../../assets/heart-regular.svg';
import korzina from '../../assets/korzina.svg';

function Korzina() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
      cart.length !== 0 ? <div className='flex flex-wrap items-center justify-center gap-[30px]'>
        {cart.map((product) => (
          <div className='w-[250px] h-[350px] shadow-lg p-5' key={product.id}>
            {/* Icons */}
            <div className="mb-6 flex justify-end gap-6">
              <Link href={'/like'} className="relative w-[20px] h-[20px] hover:scale-110 transition-transform">
                <Image fill src={like} alt="Like" className="object-contain" />
              </Link>
              <Link href={'/korzina'} className="relative w-[20px] h-[20px] hover:scale-110 transition-transform">
                <Image fill src={korzina} alt="Cart" className="object-contain" />
              </Link>
            </div>
            {/* Product Image */}
            <div className='w-[200px] h-[150px] relative p-5'>
              <Image
                src={product?.images[0]}
                alt={product?.title || "product image"}
                fill
                objectFit='cover'
              />
            </div>
            <h1 className='text-center mt-4 font-bold'>{product?.title}</h1>
            <Link href={'/korzina'} className='flex justify-between  mt-5'>
              <p>{product?.price} $</p>
              <button onClick={() => removeFromCart(product.id)}
                className='bg-green-300 px-6 py-2 rounded-md'>Remove cart</button>
            </Link>
          </div>
        ))}
      </div> : <div className='flex flex-wrap items-center justify-center gap-[30px] pt-[50px]'>Empty cart</div>
  );
}

export default Korzina;