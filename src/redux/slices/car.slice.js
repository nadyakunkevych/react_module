import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: []
};



createSlice ({
    name: "carSlice",
    initialState,
    reducers:{}
});

const {reducer:carReducer} = carSlice;

const carActions = {

}

export {
    carReducer,
    carActions
}