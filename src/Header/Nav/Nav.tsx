import React from 'react';
import style from "./Nav.module.css"

const Nav = () => {
   return (
     <div className={style.nav}>
       <a href={"#mainBlock"}>Main</a>
       <a href={"#skills"}>Skills</a>
       <a href={"#myWorks"}>My Project</a>
       <a href={"#contacts"}>Contacts</a>
       </div>
   );
};

export default Nav;