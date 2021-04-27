import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, ContactContainer, ContactRow, ContactWrapper, Subtitle, TextWrapper, TopLine } from './ContactElements'

const Contact = ({lightBg, id,imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, email, phone  }) => {
    
    return (
        <>
        <ContactContainer lightBg={lightBg} id={id} >
            <ContactWrapper>
                <ContactRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline} </Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <Subtitle darkText={darkText}>Email: {email}</Subtitle>
                            <Subtitle darkText={darkText}>Phone: {phone}</Subtitle>
                            {/* <BtnWrap>
                                <Button to='products' smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact={true} 
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap> */}
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            {/* <Img src={img} alt={alt} />  */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13292.504553073028!2d73.1503933!3d33.6020315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6c434343b921e42!2sCloud%20Emporium!5e0!3m2!1sen!2s!4v1619278618172!5m2!1sen!2s" height='100%'   style={{border:0, height:"480px", width:"300px"}} allowFullScreen="" loading="lazy"></iframe>
                            
                        </ImgWrap>
                    </Column2>
                </ContactRow>
            </ContactWrapper>
        </ContactContainer>
        </>
    )
}

export default Contact
