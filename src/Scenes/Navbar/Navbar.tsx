import React from 'react'


import HamburgerSvg from '../../assets/svg/Hamburger.svg'
import closeSvg from '../../assets/svg/Close.svg'
import Logo from '../../assets/images/Logo.png'


import ActionButton from '../../Shared/ActionButton'
import Link from './Link'
import { SelectedPage } from '../../Shared/types'
import useMediaQuery from '../../hooks/UseMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Aos from 'aos'
import 'aos/dist/aos.css';


  interface Props{

    selectedPage:SelectedPage
    setSelectedPage:(value:SelectedPage) => void 
    isTopOfPage:boolean
}



const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}:Props) => {


  React.useEffect(()=>{
    Aos.init({duration:1000});
  },[])

  const flexBetween = 'flex items-center justify-between'
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
 
  const navbarBackground = isTopOfPage == true ? 'bg-transparent' : 'bg-primary-100' 


  const [isMenuToggled,setIsMenuToggled] = React.useState<Boolean>(false);


  return (
    <nav className=''>
       <div className={`${flexBetween} fixed top-0 z-30 w-full ease-out duration-300 py-6 ${navbarBackground}`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>


          {/* Left Side */}
          <div className={`${flexBetween} gap-16`}>
            <img src={Logo} alt="" />
          </div>

          {/* RightSide */}

         { isAboveMediumScreens ? 
         <div className={`${flexBetween} w-4/5`}>

            <div className={`${flexBetween} gap-8 text-sm mx-5`}>
              <Link 
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page='Benefits'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page='Our Classes'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page='Contact Us'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <ActionButton
              setSelectedPage={setSelectedPage}
              >Become A Member</ActionButton>
            </div>

          </div>
       : (
        <div 
        className='rounded-full bg-secondary-500 p-2'
        onClick={()=>{setIsMenuToggled(isToggled=>(!isToggled)) } }
        >
          <img src={HamburgerSvg} alt="" width='30px' />
        </div>
       ) }
        </div>
       </div>

      {/* Mobile Menu Modal */}

        {!isAboveMediumScreens && isMenuToggled &&(
          <div className='fixed right-0 bottom-0 z-40  h-full w-[300px] bg-primary-100 drop-shadow-xl'>
              <div className='flex justify-end p-10'  onClick={()=>{setIsMenuToggled(isToggled=>(!isToggled))}} >
                <img src={closeSvg} width='40px' alt="" />
              </div>

            <div className={`${flexBetween} gap-10 text-2xl  flex flex-col`}>
              <Link 
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page='Benefits'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page='Our Classes'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page='Contact Us'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            </div>

          </div>
        )}

    </nav>
  )
}

export default Navbar