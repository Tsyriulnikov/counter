import React from "react";
import s from "./Show.module.css"

type ShowPropsType = {
    count:number
}
const Show: React.FC<ShowPropsType> = ({count}) => {
    return (
        <div className={count===5 ? s.red:""}>
            {count}

        </div>
    )
}
export default Show;