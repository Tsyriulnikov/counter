import React, {useEffect, useState} from 'react';
import s from "./App.module.css"
import Button from "./Button";

const App: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    const [startCount, stopCount] = [0, 5]



   //Инициализация счётчика после перезагрузки страницы.Берём значение из localStorage
    useEffect(()=>{
        let countStorageString = localStorage.getItem("currentCount");
        if (countStorageString) setCount(JSON.parse(countStorageString))
    },[])

//Закидываем счётчик в localStorage. Отслеживаем изменения по count
       useEffect(() => localStorage.setItem('currentCount', JSON.stringify(count)), [count])

 // Увеличиваем значение счётчика.
    const incCount = () => {
        if (count < stopCount) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(0)
    }

    return (

        <div className={count === stopCount ? s.mainContainerStop : s.mainContainer}>
            <div className={s.showContainer}>
                <div className={count === 5 ? s.red : ""}>{count}</div>
            </div>
            <div className={s.buttonContainer}>
                <Button name={"Increment"} callBackClick={incCount} isDisabled={count === stopCount}/>
                <Button name={"Reset"} callBackClick={resetCount} isDisabled={count === startCount}/>
            </div>
        </div>
    );

}
export default App;
