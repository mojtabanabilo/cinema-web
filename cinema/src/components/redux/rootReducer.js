import { combineReducers } from "redux";
import dataReducer from "./data/dataReducer";
import counterReducer from "../redux/count/counterReducer";

const rootReducer = combineReducers({
    dataState: dataReducer,
    counterState: counterReducer
})

export default rootReducer;