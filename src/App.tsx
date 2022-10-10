import React from 'react';

import s from './App.module.css';

function App() {
    const Yahoo = () => {
        console.log('Yahoooooo!')
    };

    return (
        <div className={s.App}>
            <div className={s.counter}>
                <div className={s.monitor}>0</div>
                <div  className={s.buttons}>
                    <div>
                        <button>inc</button>
                    </div>
                    <div>
                        <button onClick={Yahoo}>reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
