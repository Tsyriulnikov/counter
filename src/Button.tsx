import React from "react";
import s from "./Button.module.css"
type ButtonPropsType = {
    callBackClick:() => void
    isDisabled:boolean
    name:string
}

const Button:React.FC<ButtonPropsType>=({callBackClick, isDisabled,name})=>{
    const onClicIncHendler = () => {
        callBackClick()
    }
    return(
        <button className={s.button}
            disabled={isDisabled}
            onClick={onClicIncHendler}>
            {name}
        </button>

    )
}
export default Button;