import React, {useState} from 'react';
import Show from "./Show";
import s from "./App.module.css"
import Button from "./Button";

const App: React.FC = () => {
    const [count, setCount] = useState<number>(0)

       const incCount = () => {
        setCount(count+1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (

        <div className={s.App}>
            <Show count={count}/>
            <div>
                <Button name={"Increment"} callBackClick={incCount} isDisabled={count===5}/>
                <Button name={"Reset"} callBackClick={resetCount} isDisabled={count===0}/>
            </div>
        </div>
    );

}
export default App;
