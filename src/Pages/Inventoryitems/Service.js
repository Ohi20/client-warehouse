import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, price, quantity, image, sold  } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl my-10">
        <div class="card-body text-white bg-neutral">
            <h2 class="card-title text-white text-2xl">{name}</h2>
            <img src={image} width="200px" height="100px"  alt="" srcset="" />
           <p>Price: {price}</p>
           <p>Quantity: {quantity}</p>
            <p>Sold?: {sold}</p>
            <div class="card-actions justify-center">

                
            </div>
        </div>
    </div>
    );
};

export default Service;