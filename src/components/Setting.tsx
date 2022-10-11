import React from 'react';
import s from './counter.module.css';
import Monitor from "./monitor";
import Button from "./button";
import {AppPropsType} from "../App";

type CounterType = {
    Set: ()=> void
}

const Counter = (props: CounterType) => {

    return (
        <div className={s.counter}>
            <div>
                <div>
                    <div></div>
                    <input type="text" name="input" value="Type here"/>
                </div><div>
                    <div></div>
                    <input type="text" name="input" value="Type here"/>
                </div>

            </div>
            <div className={s.buttons}>
                <Button
                    name={'set'}
                    callback={props.Set}
                />
            </div>
        </div>
    );
}

export default Counter;
