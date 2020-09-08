const initialState = {
    peoples: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "GET_PEOPLES":
            return {
                ...state,
                peoples: action.payload,
            }
        case "ADD_NEW_PEOPLE":
            return {
                ...state,
                peoples: [...state.peoples, action.payload],
            }
        case "DELETE_PEOPLE":
            return {
                ...state,
                peoples: state.peoples.filter(i => i.id !== action.payload),
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "ERROR":
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}