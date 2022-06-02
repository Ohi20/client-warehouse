import { React,  useState } from 'react';
import Inventorybanner from './Inventorybanner';
import Footer from '../../Shared/Footer';

const Inventory = () => {

    const [date, setDate]= useState(new Date());

    return (
        <div>
            <Inventorybanner date={date}
            setDate={setDate}></Inventorybanner> 
            <Footer></Footer>
        </div>
    );
};

export default Inventory;