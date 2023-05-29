const initialState = {
    selectItem: [],
    details: [],
    loading: false,
    error: ""
}

const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH-USER-REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH-USER-SUCCESS":
            return {
                ...state,
                loading: false,
                selectItem: action.payload,
            }
        case "FETCH-DETAIL-SUCCESS":
            return {
                ...state,
                loading: false,
                details: action.payload,
            }
        case "FETCH-USER-FAILURE":
            return {
                loading: false,
                selectItem: [],
                error: action.payload
            }
        case "ADD-VOTE-RATE":
            const findItem = state.details.findIndex(i => i.id === action.payload.id);
            state.details[findItem].vote_count++;
        return {
            ...state
        }
        default:
            return state;
    }
}

export default dataReducer;