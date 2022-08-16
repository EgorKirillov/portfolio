import React from 'react';
import style from "./Footer.module.scss"
import linledInIcon from "./../assets/image/LinkIcons/linkedin-svgrepo-com-black.svg"
import codewarsIcon from "./../assets/image/LinkIcons/codewars-red.svg"
import githubIcon from "./../assets/image/LinkIcons/github-svgrepo-com-black.svg"
import freecodecampIcon from "./../assets/image/LinkIcons/freecodecamp-svgrepo-com.svg"
import {FooterLink} from "./FooterLink";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerConteiner}>
                <h3 className={style.title}>Egor Kirillov</h3>
                <div className={style.iconsConteiner}>
                    <FooterLink link={"https://www.linkedin.com/in/egor-kirillov-40144123b/"}
                                src={linledInIcon}
                                name={"LinkedIn.com"}
                    />
                    <FooterLink link={"https://www.codewars.com/users/EgorKirillov"}
                                src={codewarsIcon}
                                name={"codewars.com"}
                    />
                    <FooterLink link={"https://github.com/EgorKirillov"}
                                src={githubIcon}
                                name={"github.com"}
                    />
                    <FooterLink link={"https://www.freecodecamp.org/EgorKirillov"}
                                src={freecodecampIcon}
                                name={"github.com"}
                    />
                </div>
                <div className={style.endText}>© 2022 не рожден еще человек, который не смог бы стать программистом ©</div>
            
            </div>
        </div>
    );
};

export default Footer;