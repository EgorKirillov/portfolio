import style from "./FooterLink.module.scss";
import React from "react";

type FooterLinkProps = {
    src: string
    name: string
    link: string
}
export const FooterLink = (props: FooterLinkProps) => {
    return (
        <div className={style.icon}>
            <a href={props.link} target={"_blank"} rel={"noreferrer"} title={props.name}>
                <img src={props.src} width={"100%"} height={"100%"} alt={props.name}/>
            </a>
        </div>
    )
}