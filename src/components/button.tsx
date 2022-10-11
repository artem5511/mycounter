import React from 'react';
import s from './buttons.module.css';

type ButtonType = {
    disabled: boolean
    callback: () => void
    name: string
}

const Button = (props: ButtonType) => {

    return (
        <button
            className={s.button}
            onClick={props.callback}
            disabled={props.disabled}
        >{props.name}</button>
    );
}

export default Button;
