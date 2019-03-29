import React from 'react';

const input = (props) => {
    return (
        <div>
            <input type="text" onChange = {props.changed} value = {props.name}/>
        </div>
    )
};

export default input;