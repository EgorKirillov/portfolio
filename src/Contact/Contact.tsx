import React from 'react';
import Title from '../common/Components/Title';
import style from "./Contact.module.scss"
import {ContactForm, Inputs} from "./ContactForm";
import {portfolioAPI} from "../Api/api";


const Contact = () => {
    const submitContactForm =async (data: Inputs) => {
        const res = await portfolioAPI.sendContacts(data)
        if (res.data === 'message send') {alert('сообщение отправлено')} else {alert('что-то пошло не так')}
        
    }
    return (
        <section id={"contacts"} className={style.contactBlock}>
            <div className={style.contactConteiner}>
                <Title title={'Contact with me'}/>
                <div className={style.formClass}>
                    <ContactForm callBack={submitContactForm}/>
                </div>
            </div>
        </section>
    );
};

export default Contact;