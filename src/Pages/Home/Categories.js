import React, { useEffect, useState } from 'react';
import Categoriesservice from './Categoriesservice';

const Categories = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className='my-10'>
            <h2 className='text-center text-2xl text-white font-bold my-10'>Top Categories</h2>
            <div className='grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10'>
               {
                  services.slice(0,3).map(service => <Categoriesservice key={service._id}
                    service = {service}></Categoriesservice>  
                   
                    
                ) 
               } 
            </div>
        </div>
    );
};

export default Categories;