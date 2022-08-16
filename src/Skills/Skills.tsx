import React from 'react';
import style from "./skills.module.scss"
import Skill from "./Skill/Skill";
import Title from "../common/Components/Title";

const Skills = () => {
    return (
        <section className={style.skillsBlock} id={"skills"}>
            <div className={style.skillsConteiner}>
                <Title title={"skills"}/>
                <div className={style.skills}>
                    <Skill title={"React"}
                           discription={"Lorem ipsum dolor labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Co"}/>
                    <Skill title={"JS"}
                           discription={", consectetur adipis et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Vo"}/>
                    <Skill title={"HTML"}
                           discription={"ique. Mi eget maur Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh prae"}/>
                    <Skill title={"Redux"}
                           discription={"nec adipiscing trstas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac"}/>
                    <Skill title={"HTML"}
                           discription={"nec adipiscing trstas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac"}/>
                
                
                </div>
            </div>
        
        </section>
    );
};

export default Skills;