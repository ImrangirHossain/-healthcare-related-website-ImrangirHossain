import React from 'react';
import Banner from '../Banner/Banner';
import SomeServices from '../SomeServices/SomeServices';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SomeServices></SomeServices>
            <Teams></Teams>
        </div>
    );
};

export default Home;