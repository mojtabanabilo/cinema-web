const initialState = {
    selectItem: [],
    details: [],
    loading: false,
    error: ""
}

const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREASE":
            const indexIncrease = () => state.selectItem.findIndex(i => i.id === payload.id);
            state.selectItem[indexIncrease].vote_count++
            return {
                ...state
            }
        case "DECREASE":
            const indexDecrease = () => state.selectItem.findIndex(i => i.id === payload.id);
            state.selectItem[indexDecrease].vote_count--
            return {
                ...state
            }
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
        default:
            return state;
    }
}

export default dataReducer;