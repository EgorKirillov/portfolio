import React from 'react';
import Title from '../common/Components/Title';
import style from "./Contact.module.scss"


const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contactConteiner}>
                <Title title={'Contact with me'}/>
                <form action={"action"} className={style.formClass}>
                    <input type="text" placeholder={"Имя"}/>
                    <input type="text" placeholder={"Куда отвечать"}/>
                    <textarea placeholder={"сообщение..."}> </textarea>
                    
                    <button type={"submit"} onClick={() => alert("111")}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;