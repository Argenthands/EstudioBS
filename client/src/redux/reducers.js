const initialState = {
    lawers:["Olga", "Monica"],
    accountants:["Jose", "Gustavo"],
    customers:["Amarilla Gas"],
    test:'este es un store para testear'
}

function rootReducer(state = initialState, action) {
    switch (action.type){
        case "ACTION_TEST":{
            return{
                ...state,
                test: action.payload
            }
        }
        default:{
            return state
        }
    }
}

export default rootReducer