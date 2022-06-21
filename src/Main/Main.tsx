import React from 'react';
import style from "./Main.module.css"

const Main = () => {
   return (
     <div className={style.mainBlock}>
        <div className={style.conteiner}>
           <div className={style.text}>
              <span>Hi world</span>
              <h1>I am Egor Kirillov</h1>
              <p>A am React/Redux developer</p>
           </div>
           <div className={style.photo}> фото </div>
        </div>
     </div>
   );
};

export default Main;