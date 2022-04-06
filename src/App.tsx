import React, {ChangeEvent, useEffect, useState} from 'react';
import CounterMain from "./CounterMain";

import s from "./App.module.css";
import Button from "./Button";

const App:React.FC = () => {

    let [maxValue, setMaxValue] = useState<string>("0")

    let [startValue, setStartValue] = useState<string>("0")

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

        localStorage.setItem('maxValue', JSON.stringify(parseInt(maxValue)))
        localStorage.setItem('startValue', JSON.stringify(parseInt(startValue)))
    }



    const maxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }
    const startValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
    }




    return (
        <div className={s.mainApp}>

            <div className={s.mainContainer}>
                <div className={s.showContainer}>
                    <div>
                       <span>max value:
                           <input
                               value={maxValue}
                               onChange={maxValueHandler}/>
                       </span>
                        <br/>
                        <span>start value:
                           <input
                               value={startValue}
                               onChange={startValueHandler}/>
                       </span>
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <Button name={"Set"} callBackClick={setCounter} isDisabled={false}/>
                </div>
            </div>

            <CounterMain startCount={parseInt(startValue)} maxCount={parseInt(maxValue)}/>
        </div>
    )
}
export default App
