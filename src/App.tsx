import React, {ChangeEvent, useEffect, useState} from 'react';
import CounterMain from "./CounterMain";

import s from "./App.module.css";
import Button from "./Button";

const App: React.FC = () => {

    let [maxValue, setMaxValue] = useState<string>("0")
    // let [startValueTemp, setStartValueTemp] = useState<string>("0")
    let [startValue, setStartValue] = useState<string>("0")
    let [set, setSet] = useState<boolean>(true)
    let [error, setError] = useState<boolean>(false)

    // const [startValueError, setStartValueError] = useState(false)
    // const [maxValueError, setMaxValueError] = useState(false)
    // const [disabled, setDisabled] = useState(false)
    // const [disabledReset, setDisabledReset] = useState(true)
//Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
    useEffect(() => {
        let maxValueStorage = localStorage.getItem("maxValue");
        if (maxValueStorage) setMaxValue(JSON.parse(maxValueStorage))
        let startValueStorage = localStorage.getItem("startValue");
        if (startValueStorage) {
            setStartValue(JSON.parse(startValueStorage))
            setStartValue(JSON.parse(startValueStorage))
        };

    }, [])

    const setCounter = () => {
         setSet(true)
        setStartValue(startValue)
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

    // const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     const isIncorrectValue = +startValue === +e.currentTarget.value || +e.currentTarget.value < 0
    //         || +startValue > +e.currentTarget.value;
    //
    //     if (isIncorrectValue) {
    //
    //         setStartValueError(true)
    //         setMaxValueError(true)
    //         // setText('Incorrect value!')
    //         setDisabled(true)
    //     } else if (+e.currentTarget.value >= 0 && +startValue >= 0) {
    //
    //         setStartValueError(false)
    //         setMaxValueError(false)
    //         // setText(`enter values and press 'set'`)
    //         setDisabled(false)
    //     } else if (+startValue < 0) {
    //
    //         setStartValueError(true)
    //         setMaxValueError(false)
    //         setDisabled(true)
    //     }
    //     setDisabledReset(true)
    //     setMaxValue(e.currentTarget.value)
    // }



    //Обработка стартового значения
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
    }

//     const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     const isIncorrectValue = +e.currentTarget.value === +maxValue || +maxValue < 0 || +e.currentTarget.value > +maxValue
//     if (isIncorrectValue) {
//         setStartValueError(true)
//         setMaxValueError(true)  ///!
//         // setText('Incorrect value!')
//         setDisabled(true)
//     } else if (+e.currentTarget.value >= 0 && +maxValue >= 0) {
//         setStartValueError(false)
//         setMaxValueError(false) ////!
//         // setText(`enter values and press 'set'`)
//         setDisabled(false)
//     } else if (+e.currentTarget.value < 0) {
//         setStartValueError(true)
//         setMaxValueError(false)
//         setDisabled(true)
//     }
//     setDisabledReset(true)
//     setStartValue(e.currentTarget.value)
// }





// useEffect(() => {
    //     isNaN(filterInt(startValueTemp)) ||
    //     isNaN(filterInt(maxValue)) ||
    //      parseInt(startValueTemp)>=parseInt(maxValue)
    //         ? setError(true) : setError(false)
    //
    //      error ? setSet(true) : setSet(false)
    // });

    useEffect(() => {
        isNaN(filterInt(startValue)) ||
        isNaN(filterInt(maxValue)) ||
         parseInt(startValue)>=parseInt(maxValue)
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
