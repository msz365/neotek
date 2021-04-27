import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

const Services = () => {
    return (
        <>
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Preventive Maintenance</ServicesH2>
                    <ServicesP>Our team of highly trained engineers will carry out calibration & maintenance of your instruments</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Service Contracts</ServicesH2>
                    <ServicesP>Renewable Yearly Contracts for all your calibration & servicing needs to ensure hassle free operations</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Method Development</ServicesH2>
                    <ServicesP>We can help you in development of methods per internationally accepted practices</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        </>
    )
}

export default Services
