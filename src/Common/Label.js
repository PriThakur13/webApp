import React from 'react';

const Label = (props)=>{
    return(
        <label {...props}>{props.title}</label>
    );
}

export { Label };