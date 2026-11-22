'use client';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/PostUp.png"
      alt="PostUp"
      width={60}
      height={60}
      className="mt-[8px] min-w-[60px] min-h-[60px]"
      priority
    />
  );
};
