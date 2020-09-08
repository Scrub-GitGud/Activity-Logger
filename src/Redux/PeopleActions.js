export const GetPeoples = () => {
    return async (dispatch) => {
        try {
            setLoading()

            const res = await fetch('/peoples')
            const fetchedData = await res.json()
            
            dispatch({type: "GET_PEOPLES", payload: fetchedData})            
        } catch (err) {
            dispatch({type: "ERROR", payload: err.response.statusText})            
        }
    }
}

export const AddNewPeople = (newPeople) => {
    return async (dispatch) => {
        try {
            setLoading()

            const res = await fetch('/peoples', {
                method: 'POST',
                body: JSON.stringify(newPeople),
                headers: {
                    'Content-Type': 'application/json'
                } 
            })
            const fetchedData = await res.json()
    
            dispatch({type: "ADD_NEW_PEOPLE", payload: fetchedData})            
        } catch (err) {
            dispatch({type: "ERROR", payload: err.response.statusText})            
        }
    }
}

export const DeletePeople = (id) => {
    return async (dispatch) => {
        try {
            setLoading()
            
            await fetch(`/peoples/${id}`, {
                method: 'DELETE'
            })
    
            dispatch({type: "DELETE_PEOPLE", payload: id})            
        } catch (err) {
            dispatch({type: "ERROR", payload: err.response.statusText})            
        }
    }
}

export const setLoading = () => {
    return {
        type: "SET_LOADING"
    }
}