import React from 'react'
import { BenefitType, SelectedPage } from '../../Shared/types'
import { motion } from 'framer-motion'
import Htext from '../../Shared/Htext'

import HouseSvg from '../../assets/svg/House.svg'
import PeopleSvg from '../../assets/svg/People.svg'
import EducatedSvg from '../../assets/svg/Educated.svg'
import SingleBenefit from './SingleBenefit'
import ActionButton from '../../Shared/ActionButton'
import BenefitsPageGraphic from '../../assets/images/BenefitsPageGraphic.png'

interface Props{
    setSelectedPage: (value:SelectedPage)=> void
}

const Benefits = ({setSelectedPage}:Props) => {

    const benefits: Array<BenefitType> = [
        {
            icon: <img src={HouseSvg} alt="Benefit_Icon" width='20px' />,
            title:'State Of The Art Facilitys',
            description:'Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become'
        },
        {
            icon: <img src={PeopleSvg} alt="Benefit_Icon" width='20px' />,
            title:'Hundrids Of Diverse Classes',
            description:'Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become'
        },
        {
            icon: <img src={EducatedSvg} alt="Benefit_Icon" width='20px' />,
            title:'Expert And Pro Trainers',
            description:'Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become'
        }
    ]

    
  return (
    <section id={SelectedPage.Benefits} className='mx-auto min-h-full w-5/6 py-20'  >
        <motion.div onViewportEnter={()=>{setSelectedPage(SelectedPage.Benefits)}}>
            {/* Header */}
            <div data-aos='fade-up' >
                <Htext>MORE THAN JUST GYM</Htext>
                <p className='my-5 text-sm w-4/6'> Examine she brother prudent add day ham. Far sta
                    irs now coming bed oppose hunted become his. You z
                    ealously departure had procuring suspicion.</p>
            </div>
            {/* Benefits */}
            <div className='md:flex items-center justify-between gap-8'>
                {benefits.map((benefit:BenefitType)=>(
                    <SingleBenefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}   
                    setSelectedPage={setSelectedPage}               
                    />
                ))}
            </div>

            <div className='md:flex my-32 justify-center items-center gap-20'>
                {/* Graphic And Description */}
                <img
                className='mx-auto'
                src={BenefitsPageGraphic}
                data-aos='fade-down'
                />

                {/* Description */}
                <div data-aos='fade-up'>
                    {/* Title */}
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-14 before:z-[1] before:content-abstractWaves'>
                                <Htext>Millions Of Happy Members Getting {" "}
                                <span className='text-primary-500' >Fit</span>
                                </Htext>
                            </div>
                        </div>
                    {/* Description */}
                    <div className='my-10'>
                        <p>Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become his. You zealously departure had procuring suspicion. Books whose front would purse if be do decay. Quitting you way formerly disposed perceive ladyship are. Common turned boy direct and yet.</p>
                        <p className='mt-5' >Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become his. You zealously departure had procuring suspicion. Books whose front would purse if be do decay. Quitting you way formerly disposed perceive ladyship are. Common turned boy direct and yet.</p>
                    </div>
                    {/* Button */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-0 md:before:right-28 before:z-[0] md:before:content-sparkles'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  ) 
}

export default Benefits