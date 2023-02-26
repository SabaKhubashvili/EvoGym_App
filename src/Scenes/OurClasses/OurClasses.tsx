import React from 'react'
import {SelectedPage,ClassType } from '../../Shared/types'
import { motion } from 'framer-motion'
import Htext from '../../Shared/Htext';
import Class from './Class';


import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'
import image6 from '../../assets/images/image6.png'


interface Props{
    setSelectedPage: (value:SelectedPage)=> void;
}
 const OurClassesArray: Array<ClassType> = [
    {
        title:'Weight Liftins Classes',
        description:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
        img:image1
    },
    {
        title:'Weight Liftins Classes',
        description:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
        img:image2
    },
    {
        title:'Weight Liftins Classes',
        description:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
        img:image3
    },
    {
        title:'Weight Liftins Classes',
        description:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
        img:image4
    },
]

const OurClasses = ({setSelectedPage}:Props) => {


   
    

  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div onViewportEnter={()=>{setSelectedPage(SelectedPage.OurClasses)}} className='mx-auto w-5/6'>
            <div className="md:w-3/5" data-aos='fade-down'>
                {/* Description */}
                <div className="">
                    {/* title */}
                    <Htext>Our Classes</Htext>
                </div>
                <p className="py-5">
                    {/* P Tag */}
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown p  
                </p>
            </div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[1800px] flex flex-nowrap justify-center items-center'>
                    {
                        OurClassesArray.map((item:ClassType ,index)=>(
                            <Class
                                key={`${item.title}-${index}`}
                                title={item.title}
                                description={item.description}
                                img={item.img}
                            />
                        ))
                    }
                </ul>

            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses