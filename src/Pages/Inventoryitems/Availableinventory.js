import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const Availableinventory = ({date}) => {

    const [treatment, setTreatment] = useState(null); 
    const [services, setServices] = useState([]);

    const formatedDate = format(date, "PP");

    

    

    // https://protected-inlet-11024.herokuapp.com/service
    
    useEffect( ()=> {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[formatedDate])

    return (
        <div>
        <h4 className='text-2xl text-center text-white font-bold my-8'>Available Orders on: {format(date, 'PP')} </h4>
        <div className='grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10'>
           {
              services?.map(service => <Service key={service._id}
                service = {service}
                setTreatment= {setTreatment}></Service>) 
           } 
        </div>
       
    </div>
    );
};

export default Availableinventory;