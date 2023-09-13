import {createReducer} from '@reduxjs/toolkit';

export const itemreducer = createReducer({}, {
   CALL:(state)=>{

    },
   CALL_SUCCESS : (state, action) => {
       
        state.queries = action.payload.tickets;
        state.userqueries = action.payload.users;
    },
    CALL_FAILURE : (state) => {
        
        state.queries = []
        state.userqueries = [];
    },
});


export const ChoiceReducer = createReducer({}, {
    CHOICE_CALL : (state) => {
       
        state.choicedData = [];
    },
    CHOICE_CALL_SUCCESS : (state, action) => {
        
        state.choicedData = action.payload.choicedData;
        state.user = action.payload.user
    },
    CHOICE_CALL_FAILURE : (state, action) => {
        
        state.choicedData = []
        state.message = action.payload.message
    },
});
