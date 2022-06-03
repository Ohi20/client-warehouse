import React from 'react';

const Categoriesservice = ({ service }) => {

    const { name, image, price, quantity } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl className='grid sm:grid-cols-1'">
        <div class="card-body text-white bg-neutral">
            <h2 class="card-title text-white text-2xl">{name}</h2>
            <img src={image} width="200px" height="100px"  alt="" srcset="" />
           <p>Price: {price}</p>
           <p>Quantity: {quantity}</p>
            <div class="card-actions justify-center">

                
            </div>
        </div>
    </div>
    );
};

export default Categoriesservice;