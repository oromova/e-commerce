"use client";
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import like1 from '../../../assets/heart-regular.svg';
import fulllike from '../../../assets/heart-solid.svg';
import korzina from '../../../assets/korzina.svg';
import useCartStore from '@/store/useCartStore';
import useLikeStore from '../../../store/useLikeStore';

function Products() {
  const [data, setData] = useState(null);

  const addToCart = useCartStore((state) => state.addToCart);
  const changeToLike = useLikeStore((state) => state.changeToLike);
  const like = useLikeStore((state) => state.like);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setData(res?.data?.products);
        console.log(res?.data?.products);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1 className='text-center font-bold text-4xl mt-5'>Our Products</h1>
      <div className='w-[1200px] mx-auto mt-6 flex justify-between flex-wrap gap-5'>
        {
          data?.map((product) => {
            const isExist = like.some((item) => item.id === product.id);
            return (
              <div className='w-[250px] h-[350px] shadow-lg p-5' key={product.id}>
              {/* Icons */}
              <div className="mb-6 flex justify-end gap-6">
                <button
                  onClick={() => {changeToLike(product)}}
                  className="relative w-[20px] h-[20px] hover:scale-110 transition-transform">
                  {
                    isExist ? (
                      <Image fill src={fulllike} alt="Like" className="object-contain" />
                    )
                      : (
                        <Image fill src={like1} alt="Like" className="object-contain" />
                      )
                  }
                </button>
                {/* <Link href={'/korzina'} className="relative w-[20px] h-[20px] hover:scale-110 transition-transform">
                  <Image fill src={korzina} alt="Cart" className="object-contain" />
                </Link> */}
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
                <button onClick={() => addToCart(product)}
                  className='bg-green-300 px-6 py-2 rounded-md'>Buy</button>
              </Link>
            </div>
            )
})
        }
      </div>
    </div>
  );
}

export default Products;