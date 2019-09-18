
import { LOGIN } from './actions/action';

const initialState = {
    data:'',
    loading:true,
    loggedIn:false
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
        console.log(action.payload)
        let data = {
            matric_no: action.payload.matric_no,
            pasword: action.payload.password,
            authtype: 'student'
        }
      return {
        ...state,
        loading:false,
        loggedIn:true,
        data:data,
      };
    default:
      return state;
  }
}

export default loginReducer;