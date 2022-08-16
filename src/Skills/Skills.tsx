import React from 'react';
import style from "./skills.module.scss"
import Skill from "./Skill/Skill";
import Title from "../common/Components/Title";
import reactIcons from "../../src/assets/image/SkillsIcons/react.svg"
import reduxIcon from "../../src/assets/image/SkillsIcons/redux.svg"
import jsIcon from "../../src/assets/image/SkillsIcons/Js.svg"
import tsIcon from "../../src/assets/image/SkillsIcons/Ts.svg"
import gitIcon from "../../src/assets/image/SkillsIcons/git.svg"
import htmlIcon from "../../src/assets/image/SkillsIcons/html5.svg"
import cssIcon from "../../src/assets/image/SkillsIcons/css3.svg"
import apiIcon from "../../src/assets/image/SkillsIcons/api.svg"

const Skills = () => {
    return (
        <section className={style.skillsBlock} id={"skills"}>
            <div className={style.skillsConteiner}>
                <Title title={"skills"}/>
                <div className={style.skills}>
                    
                    <Skill title={"React"}
                           discription={"Lorem ipsum dolor labore etdolore magna aliqua. N" +
                               "isl tincidunt eget nullam non. Quis hendrerit dolor magna eget" +
                               " est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Co"}>
                        <img src={reactIcons} width={"100%"} alt=""/>
                    </Skill>
                    <Skill title={"Redux"}
                           discription={"nec adipiscing trstas integer eget aliquet nibh praesent. In hac" +
                               " habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac"}>
                        <img src={reduxIcon} width={"100%"} alt=""/>
                    </Skill>
                    <Skill title={"JavaScript"}
                           discription={", consectetur adipis et dolore magna aliqua. Nisl tincidunt eget n" +
                               "ullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Vo"}>
                        <img src={jsIcon} width={"100%"} alt=""/>
                    </Skill>
                    <Skill title={"TypeScript"}
                           discription={", consectetur adipis et dolore magna aliqua. Nisl tincidunt eget n" +
                               "ullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Vo"}>
                        <img src={tsIcon} width={"100%"} alt=""/>
                    </Skill>
                    <Skill title={"HTML"}
                           discription={"ique. Mi eget maur Non tellus orci ac auctor augue. Elit at imperdiet d" +
                               "ui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh prae"}>
                        <img src={htmlIcon} width={"100%"} alt=""/>
                    </Skill>
                    <Skill title={"CSS/Sass"}
                           discription={"nec adipiscing trstas integer eget aliquet nibh praesent. In hac habita" +
                               "sse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac"}>
                        <img src={cssIcon} width={"100%"} alt=""/>
                    </Skill>
                    <Skill title={"GIT / GitHub"}
                           discription={"nec adipiscing trstas integer eget aliquet nibh praesent. In hac habita" +
                               "sse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac"}>
                        <img src={gitIcon} width={"100%"} alt=""/>
                    </Skill>
                    <Skill title={"Axios / restAPI"}
                           discription={"nec adipiscing trstas integer eget aliquet nibh praesent. In hac habita" +
                               "sse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac"}>
                        <img src={apiIcon} width={"100%"} alt=""/>
                    </Skill>
                
                
                </div>
            </div>
        
        </section>
    );
};

export default Skills;