import React from 'react';

const Title = (props) => {
    return(
        <p {...props}>{props.title}</p>
    );
}

export { Title };