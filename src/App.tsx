import React, {useState} from 'react';
import Show from "./Show";
import s from "./App.module.css"
import Button from "./Button";

const App: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    const [startCount, stopCount] = [0, 5]

    const incCount = () => {
        if (count < stopCount)
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (

        <div className={count===stopCount ? s.mainContainerStop : s.mainContainer}>
            <div className={s.showContainer}>
                <Show count={count}/>
            </div>
            <div className={s.buttonContainer}>
                <Button name={"Increment"} callBackClick={incCount} isDisabled={count === stopCount}/>
                <Button name={"Reset"} callBackClick={resetCount} isDisabled={count === startCount}/>
            </div>
        </div>
    );

}
export default App;
