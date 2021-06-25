const initialState = {
    product: [],
}


export function productReducers (state = initialState, action) {

    switch(action.type){
        case 'GET_PRODUCTS':
            return {...state, product: action.payload}
            
  
        default:
             return {
                ...state}
    };
}