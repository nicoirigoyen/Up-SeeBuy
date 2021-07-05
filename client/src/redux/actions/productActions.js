import axios from 'axios'
import { BASE_URL  } from '../const'


export const getProducts = (productId = '', query = '') => {
    
    // async (dispatch) => {
        
    // const request = await axios.get(`${BASE_URL}/products?productId=${productId}&search=${query}`);
    //   try {
        
    //         dispatch({
    //             type: 'PRODUCT_LIST_REQUEST',
    //           });

    //         dispatch({
    //             type: 'GET_PRODUCTS', 
    //             payload: request.data,
    //             productId,
    //             query
                    
    //             })
    //     } catch (error) {
    //         dispatch({
    //             type: 'GET_PRODUCT_FAIL',
    //             payload: error.response,
    //           });
    //     }
        
        
    // };
}
export const getProduct = () => {
    
    
    return async (dispatch) => {
        const request = await axios.get(`${BASE_URL}/products`)
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
};
export const getNameProduct = (name) => {
    return async (dispatch) => {
    const request = await axios.get(`${BASE_URL}/products?name=${name}`)
    dispatch({type:'GET_NAME_PRODUCT', 
        payload: request.data.map(e =>{
                return {
                  name: e.name,
                  image: e.image,
                  price: e.continent,
                  category: e.category,
                  description: e.description,
                  state: e.state  
                };
              
        })})
    }
};

export const getProductById = (id) => {
    
    return async (dispatch) => {
        const request = await axios.get(`${BASE_URL}/products/${id}`)
        dispatch({type: 'GET_PRODUCTS', payload: request.data})
        }
}