import React from 'react';
import style from "./Footer.module.css"


const Footer = () => {
   return (
     <div className={style.footerBlock}>
        <div className={style.footerConteiner}>
        
        <h3 className={style.title}>Егор Кириллов</h3>
           <div className={style.iconsConteiner}>
              <div className={style.icon}>1</div>
              <div className={style.icon}>2</div>
              <div className={style.icon}>3</div>
              <div className={style.icon}>4</div>
           </div>
           <div className="endText">© 2022 не рожден еще человек, который не смог бы стать программистом ©</div>
           
        </div>
     </div>
   );
};

export default Footer;