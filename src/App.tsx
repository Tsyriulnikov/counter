import React, {ChangeEvent, useEffect, useState} from 'react';
import CounterMain from "./CounterMain";

import s from "./App.module.css";
import Button from "./Button";

const App: React.FC = () => {

    let [maxValue, setMaxValue] = useState<string>("0")
    let [startValue, setStartValue] = useState<string>("0")
    let [set, setSet] = useState<boolean>(true)
    let [errorMax, setErrorMax] = useState<string>("")
    let [errorStart, setErrorStart] = useState<string>("")

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
        setSet(true)
        localStorage.setItem('maxValue', JSON.stringify(parseInt(maxValue)))
        localStorage.setItem('startValue', JSON.stringify(parseInt(startValue)))
    }
//Проверка ввода на валидность число - строка
    const filterInt = (value: string) => {
        if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
            return Number(value);
        return NaN;
    }


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.value
        setMaxValue(currentValue);
        // setSet(false);
        isNaN(filterInt(currentValue)) ? setErrorMax("error") : setErrorMax('');
        errorMax==="error"  ? setSet(true): setSet(false)


    }



    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = e.currentTarget.value
        setStartValue(currentValue)
        // setSet(false)
        isNaN(filterInt(currentValue)) ? setErrorStart("error") : setErrorStart('')
        // errorMax || errorStart ? setSet(false): setSet(true)
    }


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
                    <Button name={"Set"} callBackClick={setCounter} isDisabled={set }/>
                </div>
            </div>

            <CounterMain startCount={parseInt(startValue)}
                         maxCount={parseInt(maxValue)}
                         set={set}
                         error={errorMax || errorStart}
            />
        </div>
    )
}
export default App
