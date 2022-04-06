import React, {useEffect, useState} from "react";
import s from "./CounterMain.module.css";
import Button from "./Button";

type CountMainPropsType = {
    startCount:number
    maxCount:number
}

const CounterMain: React.FC<CountMainPropsType> = (props) => {
    const [count, setCount] = useState<number>(props.startCount)

   // let startCount:number=0
   // let stopCount:number=5

    // useEffect(() => {setCount(props.startCount)}, [props.startCount])
    useEffect(() => {setCount(props.startCount)}, [props.startCount])

    // useEffect(() => {
    //     let stopCountString = localStorage.getItem("maxValue");
    //     if (stopCountString) stopCount= JSON.parse(stopCountString)
    // // }, [])

    //Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
      useEffect(() => {
        let countStorageString = localStorage.getItem("currentCount");
        if (countStorageString) setCount(JSON.parse(countStorageString))
    }, [])

//Закидываем счётчик в localStorage. Отслеживаем изменения по count
    useEffect(() => localStorage.setItem('currentCount', JSON.stringify(count)), [count])

    // Увеличиваем значение счётчика.
    const incCount = () => {
        if (count < props.maxCount) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(props.startCount)
    }

    return (

        <div className={count === props.maxCount ? s.mainContainerStop : s.mainContainer}>
            <div className={s.showContainer}>
                <div className={count === 5 ? s.red : ""}>{count}</div>
            </div>
            <div className={s.buttonContainer}>
                <Button name={"Increment"} callBackClick={incCount} isDisabled={count === props.maxCount}/>
                <Button name={"Reset"} callBackClick={resetCount} isDisabled={count === props.startCount}/>
            </div>
        </div>
    );

}
export default CounterMain;