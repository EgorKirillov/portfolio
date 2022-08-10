import React from 'react';
import style from "./Skill.module.scss"


const Skill = (props:{title:string; discription:string}) => {
   return (
     <div className={style.skill}>
     <div className={style.icon}> </div>
        <h3>{props.title}</h3>
        <div className={style.description}>{props.discription}</div>
     
     
     </div>
   );
};

export default Skill;