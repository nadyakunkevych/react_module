import React from 'react';
import {useForm} from "react-hook-form";

import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";

const CarForm = () => {
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();



    const submit= async (data)=>{
        await dispatch(carActions.addNewCar({/*id: new Date().getTime(),*/ car:data}))}
    reset()

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>Add car</button>
            </form>
        </div>
    );
};

export default CarForm;