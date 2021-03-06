import React from 'react';
import Title from '../common/Components/Title';
import style from "./Contact.module.css"


const Contact = () => {
   return (
     <div className={style.contactBlock}>
        <div className={style.contactConteiner}>
           <Title title={'Свяжись со мной'}/>
           <form action={"action"} className={style.formClass}>
              <input type="text" placeholder={"Имя"}/>
              <input type="text" placeholder={"Куда отвечать"}/>
              <textarea placeholder={"сообщение..."}> </textarea>
           </form>
           <button type={"submit"} onClick={() => alert("111")}>Отправить</button>
        </div>
     </div>
   );
};

export default Contact;