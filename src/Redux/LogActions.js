export const GetLogs = () => {
    return async (dispatch) => {
        try {
            setLoading()

            const res = await fetch('/logs')
            const fetchedData = await res.json()
    
            dispatch({type: "GET_LOGS", payload: fetchedData})            
        } catch (err) {
            dispatch({type: "ERROR", payload: err.response.statusText})            
        }
    }
}

export const AddNewLog = (newLog) => {
    return async (dispatch) => {
        try {
            setLoading()

            const res = await fetch('/logs', {
                method: 'POST',
                body: JSON.stringify(newLog),
                headers: {
                    'Content-Type': 'application/json'
                } 
            })
            const fetchedData = await res.json()
    
            dispatch({type: "ADD_NEW_LOG", payload: fetchedData})            
        } catch (err) {
            dispatch({type: "ERROR", payload: err.response.statusText})            
        }
    }
}

export const DeleteLog = (id) => {
    return async (dispatch) => {
        try {
            setLoading()

            await fetch(`/logs/${id}`, {
                method: 'DELETE'
            })
    
            dispatch({type: "DELETE_LOG", payload: id})            
        } catch (err) {
            dispatch({type: "ERROR", payload: err.response.statusText})            
        }
    }
}

export const SearchLog = (text) => {
    return async (dispatch) => {
        try {
            setLoading()

            const res = await fetch(`/logs?q=${text}`)
            const fetchedData = await res.json()
    
            dispatch({type: "SEARCH_LOG", payload: fetchedData})    
        } catch (err) {
            dispatch({type: "ERROR", payload: err.response.statusText})            
        }
    }
}

export const UpdateLog = (updatedLog) => {
    return async (dispatch) => {
        try {
            setLoading()

            const res = await fetch(`/logs/${updatedLog.id}`, {
                method: 'PUT',
                body: JSON.stringify(updatedLog),
                headers: {
                    'Content-Type': 'application/json'
                } 
            })
            const fetchedData = await res.json()
    
            dispatch({type: "UPDATE_LOG", payload: fetchedData})            
        } catch (err) {
            dispatch({type: "ERROR", payload: err.response.statusText})            
        }
    }
}

export const SetCurrent = (log) => {
    // console.log(log);
    // return (dispatch) => {
    //     dispatch({type: "SET_CURRENT", payload: log})
    // }
    return{
        type: "SET_CURRENT",
        payload: log
    }
}
export const ClearCurrent = () => {
    // return (dispatch) => {
    //     dispatch({type: "CLEAR_CURRENT"})
    // }
    return{
        type: "CLEAR_CURRENT"
    }
}

// set loading true
export const setLoading = () => {
    return {
        type: "SET_LOADING"
    }
}