'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrrent] = useState(0);
  return (
    <div className='space-y-4'>
      <Image
        src={images[current]}
        width={1000}
        height={1000}
        alt='Product Image'
        className='min-h-[300px] object-cover object-center'
      />
      <div className='flex'>
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrrent(index)}
            className={cn(
              'cursor-pointer border mr-2 hover:border-orange-600 ',
              current === index && 'border-2 border-blue-500'
            )}
          >
            <Image src={image} width={100} height={100} alt=' Image' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

