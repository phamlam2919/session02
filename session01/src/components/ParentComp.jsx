import React, { Component } from 'react';
import HeaderPage from './HeaderPage';
import FootterPage from './FootterPage';
import SliderSection from './SliderSection';
import DetailSection from './DetailSection';
import FindSection from './FindSection';
import ClientSection from './ClientSection';
import SignSection from './SignSection';
import InfoSection from './InfoSection';
import ProductItem from './ProductItem'


class ParentComp extends Component {
    render() {
        return (
           <div>
  <div className="hero_area">
     {/* header section strats */} 
    <HeaderPage></HeaderPage>
     {/* end header section */} 
     {/* slider section */} 
   <SliderSection></SliderSection>
     {/* end slider section */} 
  </div>
   {/* detail section */} 
  <DetailSection></DetailSection>
   {/* end detail section */} 
   {/* products section */} 
  <section className="products_section">
    <div className="heading_container">
      <h2>New Products In Store</h2>
      <p>Featured Product Just Arrived</p>
    </div>
    <div className="container layout_padding">
      <div className="product_container">
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
      </div>
    </div>
  </section>
   {/* end products section */} 
   {/* find section */} 
  <FindSection></FindSection>
   {/* end find section */} 
   {/* client section */} 
 <ClientSection></ClientSection>
   {/* end client section */} 
   {/* sign section */} 
  <SignSection></SignSection>
   {/* end sign section */} 
   {/* info section */} 
  <InfoSection></InfoSection>
   {/* end info section */} 
   {/* footer section */} 
    <FootterPage></FootterPage>
   {/* footer section */} 
</div>

        );
    }
}

export default ParentComp;