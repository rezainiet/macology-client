import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import ApplePay from '../ApplePay/ApplePay';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <ApplePay></ApplePay>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;