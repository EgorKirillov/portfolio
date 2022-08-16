import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from "./Button.module.scss"


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
// text:string
}
const Button:React.FC<ButtonPropsType> = (
    {
         ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {return (
        <button className={style.styleButton} {...restProps}
         
         />
    );
};

export default Button;
