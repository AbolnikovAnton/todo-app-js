import React from 'react';
import {Button, TextField} from "@mui/material";

const InputField = ({text, textInput, handleSubmit}) => {
    return (
        <form>
            <TextField
                variant="standard"
                size="small"
                label="Enter your ToDo"
                value={text}
                minLength='3'
                onChange={e => textInput(e.target.value)}
            />
            <Button
                onClick={handleSubmit}
                variant="outlined"
                size="large"
            >Add ToDo</Button>
        </form>
    );
};

export default InputField;