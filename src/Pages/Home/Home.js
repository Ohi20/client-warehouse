import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import Categories from './Categories';
import Extra2 from './Extra2';
import Extrasec1 from './Extrasec1';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extrasec1></Extrasec1>
            <Categories></Categories>
            <Extra2></Extra2>
            <Footer></Footer>
        </div>
    );
};

export default Home;