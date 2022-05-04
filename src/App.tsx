import React, {ChangeEvent, useEffect, useState} from 'react';
import CounterMain from "./CounterMain";

import s from "./App.module.css";
import Button from "./Button";

const App: React.FC = () => {

    let [maxValue, setMaxValue] = useState<string>("0")
    let [startValue, setStartValue] = useState<string>("0")
    let [set, setSet] = useState<boolean>(true)
    let [error, setError] = useState<boolean>(false)
    let [disableButtonSet, setDisableButtonSet] = useState<boolean>(false)
//Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
    useEffect(() => {
        let maxValueStorage = localStorage.getItem("maxValue");
        if (maxValueStorage) setMaxValue(JSON.parse(maxValueStorage))
        let startValueStorage = localStorage.getItem("startValue");
        if (startValueStorage) {
            setStartValue(JSON.parse(startValueStorage))
            setStartValue(JSON.parse(startValueStorage))
        }
        ;
    }, [])

//Нажтие на кнопку Set
    const setCounter = () => {
        setSet(false)
        setDisableButtonSet(true)
        localStorage.setItem('maxValue', JSON.stringify(parseInt(maxValue)))
        localStorage.setItem('startValue', JSON.stringify(parseInt(startValue)))
    }
//Обработка максимального значения
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        let isError = (+startValue < 0 || +value <= 0 || +startValue >= +value);
        isError ? setError(true) : setError(false)
        setSet(true)
        setDisableButtonSet(false)
        isError ? setDisableButtonSet(true) : setDisableButtonSet(false)
        setMaxValue(value);
    }
//Обработка стартового значения
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        let isError = (+value < 0 || +maxValue <= 0 || +value >= +maxValue);
        isError ? setError(true) : setError(false)
        setSet(true)
        setDisableButtonSet(false)
        isError ? setDisableButtonSet(true) : setDisableButtonSet(false)
        setStartValue(value)
    }
    return (
        <div className={s.mainApp}>

            <div className={s.mainContainer}>
                <div className={s.showContainer}>
                    <div>
                       <span>max value:
                           <input className={error ? s.error : ""}
                                  type={'number'}
                                  value={maxValue}
                                  onChange={maxValueHandler}/>
                           </span>
                        <br/>
                        <span>start value:
                           <input className={error ? s.error : ""}
                                  type={'number'}
                                  value={startValue}
                                  onChange={startValueHandler}/>
                       </span>
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <Button name={"Set"} callBackClick={setCounter} isDisabled={disableButtonSet}/>
                </div>
            </div>
            <CounterMain
                startCount={parseInt(startValue)}
                maxCount={parseInt(maxValue)}
                set={set}
                error={error}
            />
        </div>
    )
}
export default App
