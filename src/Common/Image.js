import React from 'react';

const Image = (props) => {
    return(
        <img 
            src={require(props.gender === "male" ? '../Styles/imgs/maleuser.jpg' : '../Styles/imgs/femaleuser.jpg')}/>
    );
}

export { Image };