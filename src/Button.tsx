import React from "react";

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
        <button
            disabled={isDisabled}
            onClick={onClicIncHendler}>
            {name}
        </button>

    )
}
export default Button;