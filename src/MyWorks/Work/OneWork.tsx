import React from 'react';
import style from "./OneWork.module.css"


const OneWork = (props: { title: string; discription: string }) => {
   return (
     <div className={style.mywork}>
        <div className={style.preview}>
           <a href=" "><img src=" " alt="img"/></a>
        </div>
        <h3>{props.title}</h3>
        <div className={style.description}>{props.discription}</div>
     
     
     </div>
   );
};

export default OneWork;