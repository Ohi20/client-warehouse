import { React,  useState } from 'react';
import Inventorybanner from './Inventorybanner';
import Footer from '../../Shared/Footer';
import Availableinventory from './Availableinventory';

const Inventory = () => {

    const [date, setDate]= useState(new Date());

    return (
        <div>
            <Inventorybanner date={date}
            setDate={setDate}></Inventorybanner>
            <Availableinventory date={date}
            setDate={setDate}></Availableinventory>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;