const initialState = {
    user: [],
    status: [],

}

export const userReducers = (state = initialState, action) => {
    switch(action.type){
        case 'GET_USER':
            return {...state, user: action.payload}

        case 'GET_USER_SUCCESS':
            return {...state, status:action.payload}

        
        default:
             return {
                ...state}
    };
}