import React, {useState} from 'react';
import s from './App.module.css';
import Counter from "./components/Counter";
import Setting from './components/Setting';

export type AppPropsType = {
    startValue: number
    maxValue: number
}

const App = (props: AppPropsType) => {
    let [count, setCount] = useState<number>(props.startValue)

    const Inc = () => {
        if (count < props.maxValue) {
            setCount(count + 1)
        }
    }
    const Reset = () => {
        setCount(props.startValue)
    }



    return (
        <div className={s.App}>
            <Counter
                Inc={Inc}
                Reset={Reset}
                maxValue={props.maxValue}
                startValue={props.startValue}
                value={count}/>
            <Setting
                Set={Set}
            />
        </div>
    );
}

export default App;
