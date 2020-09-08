const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "GET_LOGS": 
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case "ADD_NEW_LOG":
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
        case "DELETE_LOG":
            return {
                ...state,
                logs: state.logs.filter(i => i.id !== action.payload),
                loading: false
            }
        case "SEARCH_LOG":
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case "UPDATE_LOG":
            return {
                ...state,
                logs: state.logs.map(i => i.id === action.payload.id? action.payload : i),
                loading: false
            }
        case "SET_CURRENT":
            return {
                ...state,
                current: action.payload
            }
        case "CLEAR_CURRENT":
            return {
                ...state,
                current: null
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