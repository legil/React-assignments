import React from 'react';
import './UserOutput.css';

const output = (props) => {
    return (
        <div className='output'>
            <p>
                This is an output!
            </p>
            <p onClick = {props.click}>
                Hello {props.username}!
            </p>
        </div>
    )
};

export default output;