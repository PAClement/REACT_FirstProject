import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>À propos</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, expedita! Eius adipisci quod dolorum ex.</p>
        </div>
    );
};

export default About;