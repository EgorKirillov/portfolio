import React from 'react';
import style from "./Footer.module.scss"
import linledInIcon from "./../assets/image/LinkIcons/linkedin-svgrepo-com-black.svg"
import codewarsIcon from "./../assets/image/LinkIcons/codewars-svgrepo-com-black.svg"
import githubIcon from "./../assets/image/LinkIcons/github-svgrepo-com-black.svg"
import freecodecampIcon from "./../assets/image/LinkIcons/freecodecamp-svgrepo-com.svg"
import telegramIcon from "./../assets/image/LinkIcons/telegram-svgrepo-com-blue.svg"
import viberIcon from "./../assets/image/LinkIcons/viber-svgrepo-com.svg"
import mailIcon from "./../assets/image/LinkIcons/mail-ru-svgrepo-com.svg"
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
                    <FooterLink link={"https://t.me/EgorKirillov12"}
                                src={telegramIcon}
                                name={"telegram"}
                    />
                    <FooterLink link={"viber://chat?number=%2B375296253508"}
                                src={viberIcon}
                                name={"viber +375 29 625-35-08 "}
                    />
                    <FooterLink link={"https://github.com/EgorKirillov"}
                                src={githubIcon}
                                name={"github.com"}
                    />
                    <FooterLink link={"https://www.codewars.com/users/EgorKirillov"}
                                src={codewarsIcon}
                                name={"codewars.com"}
                    />
                    <FooterLink link={"https://www.freecodecamp.org/EgorKirillov"}
                                src={freecodecampIcon}
                                name={"freecodecamp.com"}
                    />
                    <FooterLink link={"mailto:80296253508@mail.ru"}
                                src={mailIcon}
                                name={"80296253508@mail.ru"}
                    />
                </div>
                <div className={style.endText}>© 2022 не рожден еще человек, который не смог бы стать программистом ©
                </div>
            
            </div>
        </div>
    );
};

export default Footer;