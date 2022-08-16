import React from 'react';
import Title from '../common/Components/Title';
import style from "./Contact.module.scss"
import {ContactForm, Inputs} from "./ContactForm";


const Contact = () => {
    const submitContactForm = (data: Inputs) => {
        alert(JSON.stringify(data))
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