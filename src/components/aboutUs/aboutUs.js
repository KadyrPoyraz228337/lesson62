import React from 'react';
import Title from "../title/title";
import './aboutUs.css';

const AboutUs = () => {
    return (
        <div className='aboutUs text-center'>
            <Title className='m-3' little>Hi, my name is Kadyr. I study in Attractor School</Title>
            <p>You can appreciate all my work on my <a href="https://github.com/KadyrPoyraz228337" target="_blank" rel="noopener noreferrer" >github</a></p>
        </div>
    );
};

export default AboutUs;