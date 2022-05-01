import React from 'react';
import bg from '../../../images/macologyBG.png'
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className=' heroImg'>
                <img src={bg} alt="bgOfMac" className='img-fluid' />
            </div>
        </div>
    );
};

export default Hero;