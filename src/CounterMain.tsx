import React, {memo, useEffect} from "react";
import s from "./CounterMain.module.css";
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {CounterType, setCount} from "./store/counter-reducer";
import {AppStoreType} from "./store/store";

const CounterMain: React.FC = memo(() => {
    const dispatch = useDispatch()
    const count = useSelector<AppStoreType, CounterType>(state => state.counterReducer)

    const messegeInputValue: string = "enter value and press SET"
    const messegeIncorrect: string = "incorrect value!"
//Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
    useEffect(() => {
        let startValueStorage = localStorage.getItem("startValue");
        if (startValueStorage) dispatch(setCount(JSON.parse(startValueStorage)))
    }, [])
// Увеличиваем значение счётчика.
    const incCount = () => {
        if (count.count < +count.maxValue) {
            dispatch(setCount(count.count + 1))
        }
    }
//Сброс счётчика
    const resetCount = () => {
        dispatch(setCount(+count.startValue))
    }
    return (
        // <div className={count.count === +count.maxValue ? s.mainContainerStop : s.mainContainer}>
        <div className={s.countBlock}>
            <div className={count.count === +count.maxValue ? s.showStopBlock:s.showBlock}>
                {!count.set && !count.error ?

                    <div className={count.count === +count.maxValue ? s.redValue
                        : s.showValue}>{count.count}</div>

                    : <div className={s.messageStyle}>{count.error ?
                        messegeIncorrect :
                        messegeInputValue
                    }
                    </div>
                }
            </div>
            <div className={s.countButtonBlock}>
                <Button name={"Inc"} callBackClick={incCount} isDisabled={count.count === +count.maxValue ||
                    count.set}/>
                <Button name={"Res"} callBackClick={resetCount} isDisabled={count.count === +count.startValue ||
                    count.set}/>
            </div>
        </div>
    );
})
export default CounterMain;