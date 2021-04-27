import React from 'react'
import Icon1 from '../../images/thermo-logo.png'
import Icon2 from '../../images/perkin-logo.png'
import Icon3 from '../../images/perten-logo.png'
import Icon4 from '../../images/onq-logo.png'
import Icon5 from '../../images/vwr-logo.png'
import Icon6 from '../../images/spectrum-logo.png'
import Icon7 from '../../images/honeywell-logo.png'
import Icon8 from '../../images/myscada-logo.png'
import { ProductCardLink, ProductsCard, ProductsContainer, ProductsH1, ProductsH2, ProductsIcon, ProductsP, ProductsWrapper } from './ProductsElements'


const Products = () => {
    return (
        <>
        <ProductsContainer id='products'>
            <ProductsH1>Our Products</ProductsH1>
            <ProductsWrapper>
                <ProductsCard>
                <ProductCardLink href='//www.thermofisher.com/search/browse/category/pk/en/90150354/chemical+detection' target="_blank" aria-label="Thermo Fisher Chemical Detection">
                    <ProductsIcon src={Icon1} />
                    <ProductsH2>Safety & Security Portfolio</ProductsH2>
                    <ProductsP>The best in handheld Elemental Analysis & Radiation Detection</ProductsP>
                    </ProductCardLink>
                </ProductsCard>
                <ProductsCard>
                <ProductCardLink href='//www.perkinelmer.com/product/lactoscope-ft-a-liquid-dairy-products-analyzer-lafta' target="_blank" aria-label="Perkin Elmer Dairy and Atomic Absorption">
                    <ProductsIcon src={Icon2} />
                    <ProductsH2>Atomic Absorption & Dairy Analysis</ProductsH2>
                    <ProductsP>State of the Art Dairy Analysis & Atomic Absorption Systems</ProductsP>
                </ProductCardLink>
                </ProductsCard>
                <ProductsCard>
                    <ProductCardLink href="//www.perkinelmer.com/category/food-safety-quality" target="_blank" aria-label="Perten Dough and Grain Analyzers">
                    <ProductsIcon src={Icon3} />
                    <ProductsH2>Dough & Grain Analysers</ProductsH2>
                    <ProductsP>A Wide Variety of Instruments for Analysis of Different Characteristics of Dough & Grain</ProductsP>
                    </ProductCardLink>
                </ProductsCard>
                <ProductsCard>
                <ProductCardLink href="//www.onqsoft.com.au/best-lims-qlims/" target="_blank" aria-label="LIMS">
                    <ProductsIcon src={Icon4} />
                    <ProductsH2>Laboratory Information Management System</ProductsH2>
                    <ProductsP>The best LIMS on the market. Through QLIMS, Organsiations can Automate & meet Global Regulatory Compliance</ProductsP>
                    </ProductCardLink>
                </ProductsCard>
                <ProductsCard>
                <ProductCardLink href="//us.vwr.com/store/" target="_blank" aria-label="VWR Consumables Reagents and Chemicals">
                    <ProductsIcon src={Icon5} />
                    <ProductsH2>A Complete Spectrum</ProductsH2>
                    <ProductsP>Your One-Stop for General Lab Equipment, Consumables & Reagents. The best soruce for High Quality & Traceability</ProductsP>
                    </ProductCardLink>
                </ProductsCard>
                <ProductsCard>
                <ProductCardLink href="//www.spectrum-cn.cn/Products?_l=en" target="_blank" aria-label="Spectrum Atomic Absorption and UV-Vis">
                    <ProductsIcon src={Icon6} />
                    <ProductsH2>Spectrophotometery on a Budget</ProductsH2>
                    <ProductsP>Superior Quality at a Great Price. Atomic Absorption & UV-Vis provide a Budget Firendly Alternate</ProductsP>
                    </ProductCardLink>
                </ProductsCard>
                <ProductsCard>
                <ProductCardLink href="//sps.honeywell.com/us/en/products/safety/gas-and-flame-detection/portables" target="_blank" aria-label="Honeywell Gas Detection">
                    <ProductsIcon src={Icon7} />
                    <ProductsH2>Gas Detection Portfolio</ProductsH2>
                    <ProductsP>Single & Multi Gas Detection. Disposable & Serviceable Options. Wearable & Area Monitoring Systems </ProductsP>
                    </ProductCardLink>
                </ProductsCard>
                <ProductsCard>
                <ProductCardLink href="//www.myscada.org/products/" target="_blank" aria-label="mySCADA Automation">
                    <ProductsIcon src={Icon8} />
                    <ProductsH2>Industrial Automation</ProductsH2>
                    <ProductsP>Automate Your Manufacturing Process & Leverage the Insights to Improve Efficiencies Across Your Organisation</ProductsP>
                    </ProductCardLink>
                </ProductsCard>
            </ProductsWrapper>
        </ProductsContainer>
        </>
    )
}

export default Products
