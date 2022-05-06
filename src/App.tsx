import React, {ChangeEvent, useEffect} from 'react';
import CounterMain from "./CounterMain";

import s from "./App.module.css";
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/store";
import {
    CounterType,
    setCount,
    setError,
    setMaxValue,
    setSet,
    setStartValue
} from "./store/counter-reducer";

const App: React.FC = () => {
    const dispatch = useDispatch()
    const count = useSelector<AppStoreType, CounterType>(state => state.counterReducer)
//Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
    useEffect(() => {
        let maxValueStorage = localStorage.getItem("maxValue");
        let startValueStorage = localStorage.getItem("startValue");
        if (maxValueStorage) dispatch(setMaxValue(JSON.parse(maxValueStorage)));
        if (startValueStorage) {
            dispatch(setStartValue(JSON.parse(startValueStorage)));
        }
        ;
    }, [])
//Нажтие на кнопку Set
    const setCounter = () => {
        localStorage.setItem('maxValue', JSON.stringify(parseInt(count.maxValue)))
        localStorage.setItem('startValue', JSON.stringify(parseInt(count.startValue)))
        dispatch(setSet(false))
        // При нажатии Set обновляем компоненту + сбрасывем стартовое значение
        dispatch(setCount(+count.startValue))
    }
//Обработка максимального значения
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value: string = e.currentTarget.value;
        let isError = (+count.startValue < 0 || +value <= 0 || +count.startValue >= +value);
        isError ? dispatch(setError(true)) : dispatch(setError(false))
        dispatch(setSet(true))
        dispatch(setMaxValue(value));
    }
//Обработка стартового значения
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        let isError = (+value < 0 || +count.maxValue <= 0 || +value >= +count.maxValue);
        isError ? dispatch(setError(true)) : dispatch(setError(false))
        dispatch(setSet(true))
        dispatch(setStartValue(value))
    }
    return (
        <div className={s.mainBlock}>

            <div className={s.mainContainer}>
                <div className={s.setBlock}>
                    <div className={s.inputBlock}>
                       <span>max value:
                           <input className={count.error ? s.error : ""}
                                  type={'number'}
                                  value={count.maxValue}
                                  onChange={maxValueHandler}/>
                           </span>
                        <br/>
                        <span>start value:
                           <input className={count.error ? s.error : ""}
                                  type={'number'}
                                  value={count.startValue}
                                  onChange={startValueHandler}/>
                       </span>
                    </div>

                    <div className={s.setButtonBlock}>
                        <Button name={"Set"} callBackClick={setCounter} isDisabled={!count.set || count.error}/>
                    </div>
                </div>
                <CounterMain/>
            </div>

        </div>
    )
}
export default App
