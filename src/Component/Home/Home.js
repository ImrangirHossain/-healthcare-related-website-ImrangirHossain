import React from 'react';
import Banner from '../Banner/Banner';
import Laboratory from '../Laboratory/Laboratory';
import SomeServices from '../SomeServices/SomeServices';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SomeServices></SomeServices>
            <Teams></Teams>
            <Laboratory></Laboratory>
        </div>
    );
};

export default Home;