"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo.svg';
import like1 from '../../../assets/heart-regular.svg';
import korzina from '../../../assets/korzina.svg';
import useCartStore from '@/store/useCartStore';
import useLikeStore from '@/store/useLikeStore';

function Header() {
  
  const cart = useCartStore((state) => state.cart);
  const like = useLikeStore((state) => state.like);

  return (
    <header className="w-full bg-white shadow-lg">
      <div className="w-[1200px] h-[80px] px-5 mx-auto flex justify-between items-center border-b border-gray-200">
        {/* Logo */}
        <div className="w-[100px] h-[80px] relative">
          <Image fill src={logo} alt="Logo" className="object-contain" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link href={'/like'} className="cursor-pointer relative w-[35px] h-[35px] hover:scale-110 transition-transform">
            <Image fill src={like1} alt="Like" className="object-contain relative" />
          </Link>
          <span className='w-[18px] h-[18px] text-center text-[14px] px-[3px] top-5 right-[225px] bg-amber-400 rounded-full absolute '>
            {like?.length}
          </span>
          <Link href={"/korzina"} className="cursor-pointer relative w-[35px] h-[35px] hover:scale-110 transition-transform">
            <Image fill src={korzina} alt="Cart" className="relative object-contain" />
          </Link>
          <span className='w-[18px] h-[18px] text-center text-[14px] px-[3px] text-white top-5 right-[170px] bg-green-600 rounded-full absolute '>{cart?.length}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
