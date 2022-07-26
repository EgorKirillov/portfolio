import React from 'react';
import Title from '../common/Components/Title';
import style from "./DistantWork.module.css"


const DistantWork = () => {
   return (
     <div className={style.distantWorkBlock}>
        <div className={style.distantWorkConteiner}>
           <Title title={"Не исключаю удаленную работу"}/>
           
           <button> contact with me</button>
           <h2 className={style.title}>но всегда приятней работать в коллективе</h2>
        
        
        </div>
     
     </div>
   );
};

export default DistantWork;