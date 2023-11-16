import { configureStore } from "@reduxjs/toolkit";
import DataReducer from './Datas'

export default configureStore({
    reducer:{
        datas:DataReducer
    },
});