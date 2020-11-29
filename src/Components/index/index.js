import React, { Component } from "react";


import Home from "../Home"
import About from "../About"
import SocaliMedia from "../SocaliMedia"
import Work from "../Work"
import Portfolio from "../Portfolio"
import Profil from "../Profil"
import Footer from "../Footer"


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
