import React from 'react';
import s from './counter.module.css';
import Monitor from "./monitor";
import Button from "./button";
import {AppPropsType} from "../App";


export type CounterType = AppPropsType & {
    value: number
    // startValue: number
    // maxValue: number
    Inc: ()=> void
    Reset: ()=> void
    }

const Counter = (props: CounterType) => {

    return (
        <div className={s.counter}>
            <div>
                <Monitor
                    value={props.value}
                    maxValue={props.maxValue}
                />
            </div>
            <div className={s.buttons}>
                <Button
                    name={'Inc'}
                    callback={props.Inc}
                    disabled={props.value === props.maxValue}
                />
                <Button
                    name={'Reset'}
                    callback={props.Reset}
                    disabled={props.value === props.startValue}
                />
            </div>
        </div>
    );
}

export default Counter;
