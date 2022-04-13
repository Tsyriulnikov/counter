import React, {ChangeEvent, useEffect, useState} from 'react';
import CounterMain from "./CounterMain";

import s from "./App.module.css";
import Button from "./Button";

const App: React.FC = () => {

    let [maxValue, setMaxValue] = useState<string>("0")
    let [startValue, setStartValue] = useState<string>("0")
    let [set, setSet] = useState<boolean>(true)
    let [errorMax, setErrorMax] = useState<boolean>(false)
    let [errorStart, setErrorStart] = useState<boolean>(false)

//Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
    useEffect(() => {
        let maxValueStorage = localStorage.getItem("maxValue");
        if (maxValueStorage) setMaxValue(JSON.parse(maxValueStorage))
    }, [])
    useEffect(() => {
        let startValueStorage = localStorage.getItem("startValue");
        if (startValueStorage) setStartValue(JSON.parse(startValueStorage))
    }, [])


    const setCounter = () => {
        // setSet(true)
        localStorage.setItem('maxValue', JSON.stringify(parseInt(maxValue)))
        localStorage.setItem('startValue', JSON.stringify(parseInt(startValue)))
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
        setStartValue(e.currentTarget.value)
    }

    useEffect(() => {
        isNaN(filterInt(maxValue)) ? setErrorMax(true) : setErrorMax(false)
        isNaN(filterInt(startValue)) ? setErrorStart(true) : setErrorStart(false)
        errorMax || errorStart ? setSet(true) : setSet(false)
    });


    return (
        <div className={s.mainApp}>

            <div className={s.mainContainer}>
                <div className={s.showContainer}>
                    <div>
                       <span>max value:

                           <input className={errorMax ? s.error : ""}

                                  value={maxValue}

                                  onChange={maxValueHandler}/>

                           </span>
                        <br/>
                        <span>start value:
                           <input className={errorStart ? s.error : ""}
                                  value={startValue}
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
                         error={errorMax || errorStart}
            />
        </div>
    )
}
export default App
