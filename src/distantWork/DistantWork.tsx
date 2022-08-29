import React from 'react';
import Title from '../common/Components/Title';
import style from "./DistantWork.module.scss"
import Button from "../common/Components/Button";


const DistantWork = () => {
   return (
     <section className={style.distantWorkBlock}>
        <div className={style.distantWorkConteiner}>
           <Title title={"ready to distant work"}/>
           
           {/*<button className={style.contactButton}> contact with me</button>*/}
           <Button> contact </Button>
           <h2 className={style.title}>but always better to work in a team</h2>
        
        
        </div>
     
     </section>
   );
};

export default DistantWork;