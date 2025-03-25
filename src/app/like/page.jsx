"use client";

import useLikeStore from '@/store/useLikeStore';
import fulllike from '../../assets/heart-solid.svg';
import korzina from '../../assets/korzina.svg';
import Link from 'next/link';
import Image from 'next/image';
import useCartStore from '@/store/useCartStore';

function Like() {
  const like = useLikeStore((state) => state.like);
  const changeToLike = useLikeStore((state) => state.changeToLike);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    like.length === 0 ? <h1 className='text-center mt-5 font-bold'>Like is empty</h1> :
      <div className='flex justify-center gap-[20px]'>
        {
          like.map((item) => (
            <div className='w-[250px] h-[350px] shadow-lg p-5' key={item.id}>
              {/* Icons */}
              <div className="mb-6 flex justify-end gap-6">
                <button
                  onClick={() => changeToLike(item)}
                  className="relative w-[20px] h-[20px] hover:scale-110 transition-transform">

                  <Image fill src={fulllike} alt="Like" className="object-contain" />
                </button>
                <Link href={'/korzina'} className="relative w-[20px] h-[20px] hover:scale-110 transition-transform">
                  <Image fill src={korzina} alt="Cart" className="object-contain" />
                </Link>
              </div>
              {/* Product Image */}
              <div className='w-[200px] h-[150px] relative p-5'>
                <Image
                  src={item?.images[0]}
                  alt={item?.title || "product image"}
                  fill
                  objectFit='cover'
                />
              </div>
              <h1 className='text-center mt-4 font-bold'>{item?.title}</h1>
              <Link href={'/korzina'} className='flex justify-between  mt-5'>
                <p>{item?.price} $</p>
                <button onClick={() => addToCart(item)}
                  className='bg-green-300 px-6 py-2 rounded-md'>Buy</button>
              </Link>
            </div>
          ))
        }
      </div>
  );
}

export default Like;