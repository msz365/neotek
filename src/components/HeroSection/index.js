import React, { useEffect, useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElement";



const HeroSection = () => {
  const [hover, setHover] = useState(false);

  

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg >
        <VideoBg autoPlay loop muted src={Video} type="/video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Next Generation Analytical Instruments</HeroH1>
        <HeroP>
          Large Scale, Table-top & Handheld Analytical Instruments. Field Safety Instruments, Radiation Detection & Monitoring, Consumables, Chemicals & Reagents, Industrial Automation
          and much more.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="products" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true}
                            duration={500}
                            spy={true}
                            // exact={true}
                            offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
