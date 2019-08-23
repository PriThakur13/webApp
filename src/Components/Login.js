import React from 'react';
import { connect } from 'react-redux';
import '../Styles/Common.css';
import * as Common from '../Common';
import { LOGIN_DETAIL } from '../Store/LoginData';

class Login extends React.Component {

    sumbit = (event) => {
        event.preventDefault();

        const { userInfo } = this.props;

        if (userInfo.email === "") {
            alert("please enter email address!");
        } else if (userInfo.password === "") {
            alert("Please enter password!");
        } else if (userInfo.email === LOGIN_DETAIL.username && userInfo.password === LOGIN_DETAIL.password) {
            this.props.history.push('/dashboard')
        } else {
            alert("You entered wrong credentials!");
            this.props.textfieldChange("", 'USER_EMAIL');
            this.props.textfieldChange("", 'USER_PASSWORD');
        }
    }

    render() {
        const { userInfo } = this.props;
        console.log(userInfo);
        return (
            <div className="LoginContainer">
                <form onSubmit={this.sumbit.bind(this)}>
                    <p>
                        <Common.Label
                            title="Email"
                            className="TextLabel" />
                        <Common.Input
                            type="email"
                            placeholder="Email address"
                            className="InputType"
                            value={userInfo.email}
                            onChange={(event) => this.props.textfieldChange(event.target.value, 'USER_EMAIL')} />
                    </p>

                    <p>
                        <Common.Label
                            title="Password"
                            className="TextLabel" />
                        <Common.Input
                            type="password"
                            placeholder="Password"
                            className="InputType"
                            value={userInfo.password}
                            onChange={(event) => this.props.textfieldChange(event.target.value, 'USER_PASSWORD')} />
                    </p>

                    <p>
                        <Common.Input
                            value="Submit"
                            type="submit"
                            className="ButtonCls" />
                    </p>
                </form>
            </div>
        );
    }
}

/**
 *      handling mapStateToProps
 *      handling mapDispatchToProps
*/

const mapStateToProps = state => {
    return {
        userInfo: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        textfieldChange: (value, actionType) => dispatch({ type: actionType, payload: value })
    }
}

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)
export { LoginPage as Login };