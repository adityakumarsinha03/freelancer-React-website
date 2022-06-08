import React from "react";

import NavigationSection from "./NavigationSection"
import MastheadSection from "./MastheadSection"
import PortfolioSection from "./PortfolioSection"
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";


const App= ()=>{
    return(
        <div>
        <NavigationSection/>
        <MastheadSection/>
        <PortfolioSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
        </div>
    )
}

export default App;