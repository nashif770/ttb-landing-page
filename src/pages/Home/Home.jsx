import React from 'react';
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import Resume from '../../Components/Resume';
import Services from '../../Components/Services';
import HowItWorks from '../../Components/HowItWorks';
import Team from '../../Components/Team';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Success from '../../Components/Success';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Resume></Resume>
            <Services></Services>
            <HowItWorks></HowItWorks>
            <Success></Success>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;