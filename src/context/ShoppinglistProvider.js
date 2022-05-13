import { createContext, useContext, useReducer } from "react";

const originalSL = [{ id: Date.now(), text: 'Grab some milk', done: fase }];

const slReducer = (state, action) => {
    switch(action, type) {
        case 'ADD_LISTITEM':

        return [
            { id: Date.now(), test: action.payload.text, done: false },
            ...state,
        ];
        case 'UPDATE_LISTITEM':
    }
}