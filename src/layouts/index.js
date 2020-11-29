import React, { Component } from "react";


import Home from "../Components/Home"
import About from "../Components/About"
import SocaliMedia from "../Components/SocaliMedia"
import Work from "../Components/Work"
import Portfolio from "../Components/Portfolio"
import Profil from "../Components/Profil"
import Footer from "../Components/Footer"


class Index extends Component {
    render() {
        return (
            <div>
                <Home />
                <Work />
                <Portfolio />
                <Profil />
                <About />
                <SocaliMedia />
                <Footer />
            </div>
        );
    }
}

export default Index;
