import React, {ChangeEvent, useEffect, useState} from 'react';
import CounterMain from "./CounterMain";

import s from "./App.module.css";
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/store";
import {CounterType, setDisableButtonSet, setError, setMaxValue, setSet, setStartValue} from "./store/counter-reducer";

const App: React.FC = () => {
    const dispatch = useDispatch()
    const count = useSelector<AppStoreType, CounterType>(state => state.counterReducer)
//Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
    useEffect(() => {
        let maxValueStorage = localStorage.getItem("maxValue");
        if (maxValueStorage) dispatch(setMaxValue(JSON.parse(maxValueStorage)))
        let startValueStorage = localStorage.getItem("startValue");
        if (startValueStorage) {
            dispatch(setStartValue(JSON.parse(startValueStorage)))
        }
        ;
    }, [])
//Нажтие на кнопку Set
    const setCounter = () => {
        dispatch(setSet(false))
        dispatch(setDisableButtonSet(true))
        localStorage.setItem('maxValue', JSON.stringify(parseInt(count.maxValue)))
        localStorage.setItem('startValue', JSON.stringify(parseInt(count.startValue)))
    }
//Обработка максимального значения
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value: string = e.currentTarget.value;
        let isError = (+count.startValue < 0 || +value <= 0 || +count.startValue >= +value);
        isError ? dispatch(setError(true)) : dispatch(setError(false))
        dispatch(setSet(true))
        dispatch(setDisableButtonSet(false))
        isError ? setDisableButtonSet(true) : setDisableButtonSet(false)
        dispatch(setMaxValue(value));
    }
//Обработка стартового значения
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        let isError = (+value < 0 || +count.maxValue <= 0 || +value >= +count.maxValue);
        isError ? dispatch(setError(true)) : dispatch(setError(false))
        dispatch(setSet(true))
        dispatch(setDisableButtonSet(false))
        isError ? setDisableButtonSet(true) : setDisableButtonSet(false)
        dispatch(setStartValue(value))
    }
    return (
        <div className={s.mainApp}>

            <div className={s.mainContainer}>
                <div className={s.showContainer}>
                    <div>
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
                </div>
                <div className={s.buttonContainer}>
                    <Button name={"Set"} callBackClick={setCounter} isDisabled={count.disableButton}/>
                </div>
            </div>
            <CounterMain
                startCount={parseInt(count.startValue)}
                maxCount={parseInt(count.maxValue)}
                set={count.set}
                error={count.error}
            />
        </div>
    )
}
export default App
