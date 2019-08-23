import React from 'react';
import '../Styles/Common.css';

const Card = (props) => {
    return(
        <div className="Card">
            {props.children}
        </div>
    );
}

export { Card };