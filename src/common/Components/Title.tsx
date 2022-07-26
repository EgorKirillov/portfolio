import React from 'react';
import style from "./Title.module.css";


const Title = (props: { title:string }) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    );
};

export default Title;