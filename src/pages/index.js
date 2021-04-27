import React, {useState} from 'react'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import { homeObjThree } from '../components/Contact/Data';
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'

const Home = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Products />
        <Services />
        <Contact {...homeObjThree} />
        <Footer />
        
            
        </>
    )
}

export default Home
