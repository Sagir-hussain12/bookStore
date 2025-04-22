import React from 'react'
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import NavBar from "../components/NavBar";
const Home = () => {

  return (
    <div>
    <NavBar/>
    <Banner/>
    <Freebook/>
    <Footer/>
    </div>
  )
}

export default Home