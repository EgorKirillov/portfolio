import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Button from '../common/Components/Button';
import style from "./ContactForm.module.scss"


export type Inputs = {
    name: string,
    contact: string,
    message:string
};

type PropsType = {
    callBack:(data: Inputs) => void
}
export const ContactForm = (props:PropsType) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        props.callBack(data)
    }
    
   // console.log(watch("contact")); // watch input value by passing the name of it
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.formClass}>
            <input placeholder="name" {...register("name")} />
            <input placeholder="e-mail" {...register("contact", {required: true})} />
            {errors.contact && <span>This field is required</span>}
            <textarea placeholder="text" rows={6}  {...register("message", {required: true})} />
            {errors.message &&  <span>This field is required</span>}
            <Button>submit</Button>
        </form>
    );
};

