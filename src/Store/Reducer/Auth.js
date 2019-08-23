const INITIAL_STATE = {
    email: '',
    password: ''
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'USER_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'USER_PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        default:
            console.log('default case');
            break;    
    }
    return state;
}