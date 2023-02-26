import React from 'react'

import { SelectedPage } from '../../Shared/types'
import ActionButton from '../../Shared/ActionButton'


import HomePageTextImage from '../../assets/images/HomePageText.png'
import HomePageGraphic from '../../assets/images/HomePageGraphic.png'
import HomePageTextSponsor_RedBull from '../../assets/images/sponsorRedBull.png'
import HomePageTextSponsor_Forbes from '../../assets/images/sponsorForbes.png'
import HomePageTextSponsor_Fortune from '../../assets/images/sponsorFortune.png'


import useMediaQuery from '../../hooks/UseMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

interface Props{
    setSelectedPage:(value:SelectedPage)=>void
}

const Home = ({setSelectedPage}:Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")


    
  return (
    <section id='home' className='gap-16  py-10 md:h-full md:pb-0'>
        <motion.div onViewportEnter={()=>{setSelectedPage(SelectedPage.Home)}}>
        {/* Image And Main Header */}
        <div className='md:flex justify-between mx-auto items-center w-11/12 md:h-5/6 '>
            {/* Main Header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* Headings */}
                <div className='md:-mt-20'>
                    {/* Img Title */}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 md:before:content-evolveText before:-left-20 before:z-[-1]'>
                            <img src={HomePageTextImage} alt="" />
                        </div>
                    </div>
                    {/* Heading Subtitle */}
                    <div className='w-5/6 mt-8 sm:text-sm md:text-start text-xs'>
                        <p className='w-100 '>To loud lady whom my mile sold four. Need miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put introduced see middletons nor preference.</p>
                    </div>
                </div>

                {/* Actions */}
                <div className='mt-8 flex items-center  gap-8 '>
                    <ActionButton setSelectedPage={setSelectedPage} >Join Now</ActionButton>
                        <AnchorLink 
                        className='text-bold text-sm text-primary-500 unerline hover:text-secondary-500'
                        onClick={()=>{setSelectedPage(SelectedPage.ContactUs)}}
                        href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                </div>
            </div>

            {/* Main Image */}
            <div className='flex justify-center basis-3/5 md:z-10 sm:mt-28 md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt="Home_Graphic"  />
            </div>
        </div>
        {/* Sponsors */}
        {isAboveMediumScreens &&(
        <div className='flex justify-around mt-20 h-[150px] w-full bg-primary-100 py-10' data-aos='fade-up'>
           <div className='flex items-center'>
            <img src={HomePageTextSponsor_RedBull} alt="" />
           </div>
           <div className='flex items-center'>
            <img src={HomePageTextSponsor_Forbes} alt="" />
           </div>
           <div className='flex items-center'>
            <img src={HomePageTextSponsor_Fortune} alt="" />
           </div>
        </div>
        )}
</motion.div>
    </section>
  )
}

export default Home