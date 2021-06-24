import axios from 'axios'
import { BASE_URL  } from '../const'


export const getProducts = () => {
    return async (dispatch) => {
        const request = await axios.get(`${BASE_URL}/products`)
        console.log(request + 'actionnn')
        dispatch({
            type: 'GET_PRODUCTS', payload: request.data.map(product => {
                return {
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    category: product.category,
                    description: product.description,
                    state: product.state
                }
            })
        })
    };
}