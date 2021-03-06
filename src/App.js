import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Thingstodo from "./components/Thingstodo";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Chat from "./components/Chatbox";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Gallery/>
      <Thingstodo/>
      <Contact/>
      <Map/>
      <Footer/>
      <Social/>
      <Chat/>
    </div>
  );
}

export default App;
