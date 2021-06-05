import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, Img, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'
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
                        <WebsiteRights>© {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com/Neotek-110387191195732' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        
                            <SocialIconLink href='//www.linkedin.com/company/neotech-dubai' target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        
                            <SocialIconLink href='//www.youtube.com/channel/UCDg0gomfedA2JfHXHWjZwBA' target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href='//www.instagram.com/neotekpk' target="_blank" aria-label="Youtube"><FaInstagram /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer
