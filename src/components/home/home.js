import React from 'react';
import PromoBlock from "./promoBlock/promoBlock";
import Title from "../title/title";
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <PromoBlock/>
            <Title className='mt-5' big>Some home page</Title>
        </div>
    );
};

export default Home;