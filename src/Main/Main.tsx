import React from 'react';
import style from "./Main.module.scss"
import myfoto from "../assets/image/foto.jpg"
import Particles from "react-tsparticles";
import {Part} from "./Particles";


const Main = () => {
  const myFotoStyle = {
    backgroundImage: `url(${myfoto})`,
    // maxWidth: '100%',
    // height: 'auto',
    //  backgroundSize: '100%',
    
  }
  
  const params = {
    fpsLimit: 60,
    particles: {
     number:{ value: 80,
      density: {enable:true, value_area:800}},
      color: {value: "red"},
      links: {enable: true, color: "red", distance: 100},
      move: {enable: true}
    }
  }
  const options= {
    preset:'links'
  }
  
  
  return (
    <section className={style.mainBlock} id={"mainBlock"}>
      {/*<Particles className={style.tsparticles} options={options} params={params}/>*/}
      <div className={style.conteiner}>
        {/*<Particles className={style.tsparticles} params={params} />*/}
        <Part />
        
        <div className={style.intro}>
          <span>Hi world</span>
          <span>I am <span>Egor Kirillov</span></span>
          <h1> A am React/Redux developer</h1>
        </div>
        
        
        {/*<div className={style.text}>*/}
        {/*  */}
        {/*  <h1>*/}
        {/*    <span>Hi world</span>*/}
        {/*    I am <span className={style.intro}>Egor Kirillov</span>*/}
        {/*  </h1>*/}
        {/*  <p>A am React/Redux developer</p>*/}
        {/*</div>*/}
        <div className={style.photoBlock}>
          <div className={style.photo} style={myFotoStyle}></div>
          <span className={style.spanPhoto}> </span></div>
      
      </div>
    </section>
  );
};

export default Main;