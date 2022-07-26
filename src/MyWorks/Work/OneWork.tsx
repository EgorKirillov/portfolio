import React from 'react';
import style from "./OneWork.module.css"


const OneWork = (props: { style:object; title: string; discription: string }) => {
   return (
     <div className={style.mywork}>
        <div className={style.preview} style={props.style}>
           <a className={style.viewButton}>look</a>
          
        </div>
         <div className={style.description}>
             <h3>{props.title}</h3>
             <div>{props.discription}</div>
         </div>
     
     </div>
   );
};

export default OneWork;