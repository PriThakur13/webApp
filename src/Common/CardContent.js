import React from 'react';
import * as Common from '../Common';

const CardContent = (props) => {
    return(
        <React.Fragment>
            <div className="CardLeft">
                <p>
                    <Common.Image gender={props.data.gender}/>
                </p>
            </div>
            <div className="CardRight">
                <Common.Title className="title" title={props.data.name}/>
                <Common.Title className="titlelow" title={props.data.email}/>
                <Common.Title className="titlephone" title={props.data.phoneNo}/>
            </div>
        </React.Fragment>
    );
}

export { CardContent };