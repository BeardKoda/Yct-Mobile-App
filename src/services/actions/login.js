import { LOGIN } from './action';

export const login = detail => {
    return {
        type: LOGIN,
        payload: detail
    }
}
export const checkLOGIN= () =>{
    return {
        type: LOGIN,
        payload: []
    }
}