import React from 'react';
// import axios from 'axios';
import * as Common from '../Common';
import userData from '../Store/Users.json';

class Dashboard extends React.Component {

    getUserData = () => {
        return userData.user.map((value, index)=>{
            return(
                <Common.Card key={index}>
                    <Common.CardContent data={value}/>
                </Common.Card>
            );
        })
    }

    componentDidMount(){
        
    }   

    render(){
        return(
            <div className="DashContainer">
                {this.getUserData()}
            </div>
        );
    }
}

export { Dashboard };