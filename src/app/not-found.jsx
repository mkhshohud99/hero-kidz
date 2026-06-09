import Link from 'next/link';
import React from 'react';
import { BiSolidErrorAlt } from 'react-icons/bi';

const Error404 = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center gap-5'>
            <BiSolidErrorAlt size={100} className='text-primary'/>
            <h2 className='text-4xl font-bold'>Page not found</h2>
            <Link href={"/"} className='btn btn-primary btn-outline'>Go To Home</Link>
        </div>
    );
};

export default Error404;