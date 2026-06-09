import React from 'react';

const ProductSkeleton = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-md"> 
            <div className="skeleton h-64 w-full"></div> 
            <div className="card-body"> 
            <div className="skeleton h-6 w-3/4"></div>
            <div className="flex gap-2"><div className="skeleton h-4 w-12"></div> 
            <div className="skeleton h-4 w-20"></div> 
            </div> <div className="skeleton h-4 w-24"></div> 
            <div className="flex gap-2"> <div className="skeleton h-6 w-20"></div> 
            <div className="skeleton h-6 w-16"></div> </div> 
            <div className="skeleton h-10 w-full"></div> </div> </div>
        </div>
    );
};

export default ProductSkeleton;