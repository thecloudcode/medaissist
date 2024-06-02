import React from 'react'
import HeroContent from '../sub/HeroContent';

function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full'>
        {/* <video autoPlay muted loop className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover">

        <source src='/blackhole.webm' type="video/webm" />
        </video> */}
        <HeroContent />
    </div>
  )
}

export default Hero;