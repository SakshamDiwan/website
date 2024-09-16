import React from 'react'
import Globe from 'react-globe.gl'
import { useState } from 'react'
import Button from '../components/Button.jsx'

const About = () => {

  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('sd966@cornell.edu')
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 3000)
  }

  return (
    <section className='c-space my-20' id="about">
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src="./assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
            <div>
              <p className='grid-headtext'>Hi, I'm Saksham</p>
              <p className='grid-subtext'>I'm a junior majoring in Computer Science at Cornell. I'm always learning and experimenting with new technologies and languages. I am interested in full-stack development and machine learning.</p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container items-center'>
            <img src="./assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain mask-image' />
            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>I specialize in Python and JavaScript/TypeScript(React, Next.js, Node.js). I can also code in C, C++, OCaml and Java if the problem demands it.</p>
            </div>
          </div>
        </div>
        {/* <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe 
                height={326}
                width={326}
                backgroundColor='rgba(0, 0, 0, 0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className='grid-headtext'></p>
              <p className='grid-subtext'>I am based in America, working in the Eastern Time Zone.</p>
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass='w-full mt-10'/>
              </a>
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src="./assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>My passion for coding</p>
              <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't just my profession, it is my passion.</p>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img src="./assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Contact Me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img src={hasCopied ? "./assets/tick.svg" : "./assets/copy.svg"} alt="copy" />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>sd966@cornell.edu</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About
