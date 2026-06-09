import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
                <h2 className={`${fontBangla.className} font-bold text-6xl leading-20`}>আপনার শিশুকে একটি সুন্দর <span className='text-primary'>আগামী উপহার দিন</span></h2>
                <p className={`${fontBangla.className} text-2xl`}>১৫% ডিস্কাউন্টে শিশুদের বই ক্রয় করুণ আজই ....</p>
                <button className='btn btn-primary btn-outline'>Explore Products</button>
            </div>
            <div className='flex-1'>
                <Image src={"/assets/hero.png"} alt='Hero-Image' width={500} height={400}></Image>
            </div>
        </div>
    );
};

export default Banner;