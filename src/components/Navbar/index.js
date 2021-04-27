import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Img, MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'
import logo from '../../images/Logo.png'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, )


    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}> 
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <Img src={logo} />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' 
                            smooth={true}
                            duration={500}
                            spy={true}
                            // exact={true}
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='products'
                            smooth={true}
                            duration={500}
                            spy={true}
                            // exact={true}
                            offset={-80}
                            >Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            // exact={true}
                            offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'
                            smooth={true}
                            duration={500}
                            spy={true}
                            // exact={true}
                            offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
