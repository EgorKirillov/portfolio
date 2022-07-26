import React from 'react';
import style from "./works.module.css"
import OneWork from "./Work/OneWork";
import Title from "../common/Components/Title";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={style.worksConteiner}>
                <Title title={"my works"}/>
                <div className={style.works}>
                    <OneWork title={"Social network"}
                             discription={"Lorem ipsum dolor labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Co"}/>
                    <OneWork title={"Todo List"}
                             discription={", consectetur adipis et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Vo"}/>
                
                </div>
            </div>
        
        </div>
    );
};

export default Works;