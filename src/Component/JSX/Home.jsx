import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services';
import Trusted from './Trusted';
import FeatureProduct from './FeatureProducts';
const Home = () => {
  const data = {
    name:"Tech Gedgets",
  };
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProduct />
    <Services />
    <Trusted />
    
    </>
  )
}

export default Home
