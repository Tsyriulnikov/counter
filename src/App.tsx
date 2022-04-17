import React, {ChangeEvent, useEffect, useState} from 'react';
import CounterMain from "./CounterMain";

import s from "./App.module.css";
import Button from "./Button";

const App: React.FC = () => {

    let [maxValue, setMaxValue] = useState<string>("0")
    let [startValueTemp, setStartValueTemp] = useState<string>("0")
    let [startValue, setStartValue] = useState<string>("0")
    let [set, setSet] = useState<boolean>(true)
    let [error, setError] = useState<boolean>(false)

//Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
    useEffect(() => {
        let maxValueStorage = localStorage.getItem("maxValue");
        if (maxValueStorage) setMaxValue(JSON.parse(maxValueStorage))
        let startValueStorage = localStorage.getItem("startValue");
        if (startValueStorage) {
            setStartValueTemp(JSON.parse(startValueStorage))
            setStartValue(JSON.parse(startValueStorage))
        };

    }, [])

    const setCounter = () => {
         setSet(true)
        setStartValue(startValueTemp)
        localStorage.setItem('maxValue', JSON.stringify(parseInt(maxValue)))
        localStorage.setItem('startValue', JSON.stringify(parseInt(startValueTemp)))
    }
//Проверка ввода на валидность число - строка
    const filterInt = (value: string) => {
        if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
            return Number(value);
        return NaN;
    }

//Обработка максимального значения
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value);
    }

    //Обработка стартового значения
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueTemp(e.currentTarget.value)
    }

    useEffect(() => {
        isNaN(filterInt(startValueTemp)) ||
        isNaN(filterInt(maxValue)) ||
         parseInt(startValueTemp)>=parseInt(maxValue)
            ? setError(true) : setError(false)

         error ? setSet(true) : setSet(false)
    });


    return (
        <div className={s.mainApp}>

            <div className={s.mainContainer}>
                <div className={s.showContainer}>
                    <div>
                       <span>max value:

                           <input className={error ? s.error : ""}

                                  value={maxValue}

                                  onChange={maxValueHandler}/>

                           </span>
                        <br/>
                        <span>start value:
                           <input className={error ? s.error : ""}
                                  value={startValueTemp}
                                  onChange={startValueHandler}/>
                       </span>
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <Button name={"Set"} callBackClick={setCounter} isDisabled={set}/>
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
