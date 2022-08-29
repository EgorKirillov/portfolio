import React from 'react';
import style from "./Skill.module.scss"

type PropsType = {
    title: string
    discription: string
    children?: React.ReactNode
}
const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>
          <div className={style.iconContainer}>
            <div className={style.icon}>
              {props.children}
            </div>
          </div>
            <h3>{props.title}</h3>
            <div className={style.description}>{props.discription}</div>
        
        
        </div>
    );
};

export default Skill;