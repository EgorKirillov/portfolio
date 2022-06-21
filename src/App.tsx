import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from './Skills/Skills';
import Works from "./MyWorks/Works";
import DistantWorks from "./distantWork/DistantWork";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Header/>
       <Main/>
       <Skills />
       <Works />
       <DistantWorks/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
