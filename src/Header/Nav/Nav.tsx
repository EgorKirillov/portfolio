import React from 'react';
import style from "./Nav.module.css"

const Nav = () => {
   return (
     <div className={style.nav}>
       <a href={"#mainBlock"}>Главная</a>
       <a href={"#skills"}>Скиллы</a>
       <a href={"#myWorks"}>Проекты</a>
       <a href={"#contacts"}>Контакты</a>
       </div>
   );
};

export default Nav;