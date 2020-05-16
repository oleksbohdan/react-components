import React, {useState} from 'react';
import '../App.css';

const InoutUsingHook = () => {
    const [input, updateInput] = useState('');

    return(
        <div>
            <h1>{input}</h1>
            <label htmlFor="input">
                Input<br/>
                <input id="input" type="text" value={input} onChange={ e => updateInput( e.target.value)}/>
            </label>
        </div>
    );
};

export default InoutUsingHook;