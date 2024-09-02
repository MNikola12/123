import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Slider from '../slider';

function Home(){
    return(<>
    <HeroSection/>
    <Cards/>
    <Slider url={"https://picsum.photos/v2/list"}/>
    </>)
}
export default Home;