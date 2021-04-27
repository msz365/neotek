import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, Img, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {FaFacebook, FaLinkedin, FaYoutube} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import logo from '../../images/Logo.png'

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="products">Products</FooterLink>
                                <FooterLink to="services">About Us</FooterLink>
                                <FooterLink to="contact">Contact</FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="products">Products</FooterLink>
                                <FooterLink to="services">About Us</FooterLink>
                                <FooterLink to="contact">Contact</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="products">Products</FooterLink>
                                <FooterLink to="services">About Us</FooterLink>
                                <FooterLink to="contact">Contact</FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="products">Products</FooterLink>
                                <FooterLink to="services">About Us</FooterLink>
                                <FooterLink to="contact">Contact</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        <Img src={logo}/>
                        </SocialLogo>
                        <WebsiteRights>Neotek © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        
                            <SocialIconLink href='//www.linkedin.com/company/neotech-dubai' target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        
                            <SocialIconLink href='/' target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer
