import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo.svg';
import like from '../../../assets/like.svg';
import korzina from '../../../assets/korzina.svg';

function Header() {
  return (
    <header className="w-full bg-white shadow-lg">
      <div className="w-[1200px] h-[80px] px-5 mx-auto flex justify-between items-center border-b border-gray-200">
        {/* Logo */}
        <div className="w-[100px] h-[80px] relative">
          <Image fill src={logo} alt="Logo" className="object-contain" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link href={'/like'} className="relative w-[35px] h-[35px] hover:scale-110 transition-transform">
            <Image fill src={like} alt="Like" className="object-contain" />
          </Link>
          <Link href={'/korzina'} className="relative w-[35px] h-[35px] hover:scale-110 transition-transform">
            <Image fill src={korzina} alt="Cart" className="object-contain" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
