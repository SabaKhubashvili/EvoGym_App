import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../../assets/images/Logo.png'
import { SelectedPage } from '../../Shared/types'

const  Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-around mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="" />                
                <p className='my-5' >Lorem ipsum dolor sit amet, consectetur adipiscin
                    g elit. Morbi commodo laoreet urna, ut fringilla dui 
                    malesuada in. Aenean auctor arcu vitae blandit consequat. Vivamus
                     interdum scelerisque elit quis tincidunt. Morbi et </p>
                <p>© EvoGym All Rights Reserved.</p>
            </div>
            <div className='mt-16 md:mt-0 basis-1/4 flex flex-col '>
                <h4 className='font-bold'>Links</h4>
                <AnchorLink href={`#${SelectedPage.Home}`} className="my-1 mt-2">Home</AnchorLink>
                <AnchorLink href={`#${SelectedPage.Benefits }`} className="my-1">Benefits</AnchorLink>
                <AnchorLink href={`#${SelectedPage.OurClasses}`} className="my-1">Our Classes</AnchorLink>
                <AnchorLink href={`#${SelectedPage.ContactUs}`} className="my-1">Contact Us</AnchorLink>
            </div>
            <div className='mt-16 md:mt-0 basis-1/4 '>
                <h4 className='font-bold'>Contact Us</h4>
                <p className="my-5">Location: Tbilisi-Moli</p>
                <p className="my-5">Phone: +995 598 43 87 88</p>
                <p className="my-5">Open: 24/7</p>
                <p></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer