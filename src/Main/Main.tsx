import React from 'react';
import style from "./Main.module.scss"
import myfoto from "../assets/image/foto.jpg"



const Main = () => {
    const myFotoStyle = {
        backgroundImage:`url(${myfoto})`,
         // maxWidth: '100%',
         // height: 'auto',
       //  backgroundSize: '100%',
        
    }
   return (
     <div className={style.mainBlock}>
        <div className={style.conteiner}>
           <div className={style.text}>
              <span>Hi world</span>
              <h1>I am Egor Kirillov</h1>
              <p>A am React/Redux developer</p>
           </div>
            <div className={style.photoBlock}>
                <div className={style.photo} style={myFotoStyle}></div>
                <span className={style.spanPhoto}> </span></div>
            
        </div>
     </div>
   );
};

export default Main;