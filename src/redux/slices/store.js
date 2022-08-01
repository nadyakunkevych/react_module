import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./car.slice";


const rootReducer = combineReducers({
    cars:carReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}