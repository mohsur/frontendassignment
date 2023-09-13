import {configureStore} from '@reduxjs/toolkit';
import { itemreducer,ChoiceReducer } from './reducer/itemreducer';

const store=configureStore({
    reducer:{
        itemreducer,ChoiceReducer
    }
})
export default store;