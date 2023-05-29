const addItem = data => {
    return {
        type: "ADD_ITEM",
        payload: data
    }
}

const increase = data => {
    return {
        type: "INCREASE",
        payload: data
    }
}

const decrease = data => {
    return {
        type: "DECREASE",
        payload: data
    }
}

export {addItem, increase, decrease};