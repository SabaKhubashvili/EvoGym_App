import React from "react"
import Benefits from "./Scenes/Benefits/Benefits"
import Contact from "./Scenes/Contact/Contact"
import Footer from "./Scenes/Footer/Footer"
import Home from "./Scenes/home/Home"
import Navbar from "./Scenes/Navbar/Navbar"
import OurClasses from "./Scenes/OurClasses/OurClasses"
import { SelectedPage } from "./Shared/types"


function App() {
  
  const [selectedPage,setSelectedPage] = React.useState<SelectedPage>(SelectedPage.Home)

  const [isTopOfPage,setIsTopOfPage] = React.useState<boolean>(true)

  React.useEffect(()=>{
    const isScrolled = () =>{
      if(window.scrollY !== 0){
        setIsTopOfPage(false)
      }else{
        setIsTopOfPage(true) 
        setSelectedPage(SelectedPage.Home)
      }
    }
    window.addEventListener('scroll',isScrolled);
    return () => window.addEventListener('scroll',isScrolled)
  },[])


  return (
   <React.Fragment>
      <div className="app bg-gray-50">
        <Navbar 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
        />
        <Home
        setSelectedPage={setSelectedPage}
        />
        <Benefits
        setSelectedPage={setSelectedPage}
        />
        <OurClasses
        setSelectedPage={setSelectedPage}
        />
        <Contact
        setSelectedPage={setSelectedPage}
        />
        <Footer/>
      </div>
   </React.Fragment>
  )
}

export default App
