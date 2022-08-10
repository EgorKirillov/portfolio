import React from 'react';
import Title from '../common/Components/Title';
import style from "./DistantWork.module.scss"


const DistantWork = () => {
   return (
     <div className={style.distantWorkBlock}>
        <div className={style.distantWorkConteiner}>
           <Title title={"ready to distant work"}/>
           
           <button className={style.contactButton}> contact with me</button>
           <h2 className={style.title}>but always better to work in a team</h2>
        
        
        </div>
     
     </div>
   );
};

export default DistantWork;