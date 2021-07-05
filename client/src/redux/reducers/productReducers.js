const initialState = {
    product: [],
    productName:[]
}


export function productReducers (state = initialState, action) {

    switch(action.type){
        // case 'PRODUCT_LIST_REQUEST':
        //     return {...state,
        //         loading: true,
        //         product: [],
        //     };
        case 'GET_PRODUCTS':
            return { ...state, product: action.payload };
            

        case 'GET_NAME_PRODUCT':
            return {...state, productName: action.payload};
    
        // case 'GET_PRODUCT_FAIL':
        //     return {
        //         loading: false,
        //         error: action.payload,
        //     };
  
        default:
             return {
                 ...state}
    };
}