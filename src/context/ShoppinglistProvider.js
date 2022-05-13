import { createContext, useContext, useReducer } from "react";

const originalSl = [{ id: Date.now(), text: 'Grab some milk', done: fase }];

const slReducer = (state, action) => {
    switch(action, type) {
        case 'ADD_LISTITEM':

        return [
            { id: Date.now(), test: action.payload.text, done: false },
            ...state,
        ];
        case 'UPDATE_LISTITEM':
            return state.map((listitem) => {
                if (listitem.id === action.payload.listitem.id) {
                    const { done, text } = action.payload.listitem;

                    return {
                        ...listitem,
                        done,
                        text,
                    };
                }
                return listitem;
            });
            case 'DELETE_LISTITEM':
                return state.filter((listitem) => listitem.id !== action.payload.id)
;
            default:
                throw new Error(`Action type ${action.type} is not supported`);
    }
};

const SlContext = createContext();

export const ShoppinglistProvider = ({ children }) => {
    const [listitems, dispatch] = useReducer(listitemReducer, originalSl);

    const controlAddListitem = (text) => {
        dispatch({ type: 'ADD_LISTITEM', payload: { text } });
    }
}