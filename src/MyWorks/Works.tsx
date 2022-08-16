import React from 'react';
import style from "./works.module.scss"
import OneWork from "./Work/OneWork";
import Title from "../common/Components/Title";
import toDoImage from "../../src/assets/image/td.png"
import socNetImage from "../../src/assets/image/ss.png"

const Works = () => {
    const socNetworkStyle = {
        backgroundImage: `url(${socNetImage})`,

    }
    const toDoListStyle = {
        backgroundImage:`url(${toDoImage})`,

    }
    
    
    return (
        <section className={style.worksBlock} id={"myWorks"}>
            <div className={style.worksConteiner}>
                <Title title={"my works"}/>
                <div className={style.works}>
                    <OneWork style={socNetworkStyle}
                             title={"Social network"}
                             discription={"Lorem ipsum dolor labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Co"}/>
                    <OneWork style={toDoListStyle}
                             title={"Todo List"}
                             discription={", consectetur adipis et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Vo"}/>
                
                </div>
            </div>
        
        </section>
    );
};

export default Works;