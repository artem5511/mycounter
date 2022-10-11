import React from 'react';

import s from './monitor.module.css';

type MonitorProps = {
    value: number
    maxValue: number
}

 const Monitor = (props: MonitorProps) => {
            return (
                <div className={props.value === props.maxValue ? s.rmonitor : s.monitor }>
                    {props.value}
                </div>
    );
}

export default Monitor;
