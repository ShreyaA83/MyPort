import React from 'react'
import HeroContent from '../sub/HeroContent';

const Hero = () => {
    return (
        <div className='relative flex flex-col h-full w-full'>
            <video
                className='rotate-180 absolute top-[-350px] left-0 z-[1] 
      w-full h-full object-cover 
      transition-all duration-500 ease-in-out  
                opacity-5  xs:opacity-20 
                  md:opacity-45 md:scale-100 lg:opacity-100 lg:scale-100'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src='/blackhole.webm' type='video/webm' />
            </video>
            <HeroContent />

        </div>
    );
};

export default Hero;
