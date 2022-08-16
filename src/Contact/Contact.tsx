import React from 'react';
import Title from '../common/Components/Title';
import style from "./Contact.module.scss"
import Button from "../common/Components/Button";


const Contact = () => {
    const onButtonClickHandler = (e:any) => {
         e.preventDefault()
         alert("111")
    }
    return (
        <section id={"contacts"} className={style.contactBlock}>
            <div className={style.contactConteiner}>
                <Title title={'Contact with me'}/>
                <form action={"action"} className={style.formClass}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"e-mail"}/>
                    <textarea placeholder={"message..."}> </textarea>
                    <Button onClick={(e)=>onButtonClickHandler(e)}> l,ndgf </Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;