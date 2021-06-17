import axios from 'axios'
import { BASE_URL, GET_COUNTRIES, FILTER_URL } from '../const'


export const register = (form) => {
    console.log('ENTRO A LA ACCION!')
    return async () => {
        await axios.post(`${BASE_URL}/singin/register`, Object.assign(form));
    }
}
export const singin = (email, password) => {
    console.log(email)
    console.log(password)
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
