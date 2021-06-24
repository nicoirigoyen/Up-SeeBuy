import axios from 'axios'
import { BASE_URL,  } from '../const'


export const register = (form) => {

    return async () => {
        await axios.post(`${BASE_URL}/singin/register`, Object.assign(form));
    }
}
export const singin = (email, password) => {

    return async (dispatch) => {
        dispatch({
            type: 'GET_USER_REQUEST'})
        const request = await axios.post(`${BASE_URL}/singin/singin`,{email,password})
            //aca pedi los datos a la base que coincidan
            
    dispatch({
        type: 'GET_USER_SUCCESS', payload: request.data }) 
        //aca mando la data al reducers y el reducer guarda el estado
    }
}
