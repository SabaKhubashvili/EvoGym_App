import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../../Shared/types'

interface Props{
    icon:React.ReactNode,
    title:string,
    description:string,
    setSelectedPage:(value:SelectedPage)=> void
}   


const SingleBenefit = ({icon,title,description,setSelectedPage}:Props) => {
  return (
    <div className='mt-5 rounded-md border-solid border-2 border-gray-400 px-5 py-16 text-center' data-aos='fade-up' >
        {/* Benefit Icon */}
        <div className='mb-4 flex justify-center'>
            <div className="rounded-full border-gray-100 bg-primary-300 p-4">
                {icon   }
            </div>
        </div>
        <div className="font-bold">
            {title}
        </div>
        <p className='my-3'>
            {description}
        </p>

                <AnchorLink 
                    className='text-bold text-sm text-primary-500 unerline hover:text-secondary-500'
                    onClick={()=>{setSelectedPage(SelectedPage.ContactUs)}}
                    href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                </AnchorLink>

    </div>
  )
}

export default SingleBenefit