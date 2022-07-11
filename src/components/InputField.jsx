import React from 'react';

const InputField = ({text, textInput, handleSubmit}) => {
    return (
        <label>
            <input value={text} onChange={e => textInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add ToDo</button>
        </label>
    );
};

export default InputField;