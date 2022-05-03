import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import Button from "./Button";

type CountMainPropsType = {
    startCount: number
    maxCount: number
    set: boolean
    error:boolean
}

const CounterMain: React.FC<CountMainPropsType> = (props) => {
    const [count, setCount] = useState<number>(props.startCount)
    const messegeInputValue: string = "enter value and press SET"
    const messegeIncorrect: string = "incorrect value!"

    //Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
    useEffect(() => {
        let startValueStorage = localStorage.getItem("startValue");
        if (startValueStorage) setCount(JSON.parse(startValueStorage))
    }, [])

// //Закидываем счётчик в localStorage. Отслеживаем изменения по count
//     useEffect(() => localStorage.setItem('currentCount', JSON.stringify(count)), [count]);

//
    useEffect(() => {
        if (!isNaN(props.startCount)) setCount(props.startCount)
    }, [props.startCount])


    // Увеличиваем значение счётчика.
    const incCount = () => {
        if (count < props.maxCount) {
            setCount((count)=>count + 1)
        }
    }

    const resetCount = () => {
        setCount(props.startCount)
    }

    return (

        <div className={count === props.maxCount ? s.mainContainerStop : s.mainContainer}>
            <div className={s.showContainer}>

                {!props.set ?
                    <div className={count === props.maxCount ? s.red
                        : s.showValue}>{count}</div>

                    : <div>{props.error ?
                    messegeIncorrect :
                    messegeInputValue
                    }

                    </div>
                }

            </div>
            <div className={s.buttonContainer}>
                <Button name={"Increment"} callBackClick={incCount} isDisabled={count === props.maxCount ||
                    props.set}/>
                <Button name={"Reset"} callBackClick={resetCount} isDisabled={count === props.startCount ||
                    props.set}/>
            </div>
        </div>
    );

}
export default CounterMain;