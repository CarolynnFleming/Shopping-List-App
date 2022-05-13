import { createContext, useContext, useReducer } from "react";

const initialListitems = [{ id: Date.now(), text: 'Grab some milk', done: false }];

const listitemReducer = (state, action) => {
    switch(action.type) {
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

const ListitemContext = createContext();

export const ShoppinglistProvider = ({ children }) => {
    const [listitems, dispatch] = useReducer(listitemReducer, initialListitems);

    const controlAddListitem = (text) => {
        dispatch({ type: 'ADD_LISTITEM', payload: { text } });
    };

    const controlUpdateListitem = (listitem) => {
        dispatch({ type: 'UPDATE_LISTITEM', payload: { listitem } });
    };

    const controlDeleteListitem = (id) => {
        dispatch({ type: 'DELETE_LISTITEM', payload: { id } });
    };

    return (
        <ListitemContext.Provider
        value={{ listitems, controlAddListitem, controlUpdateListitem, controlDeleteListitem }}>
            {children}
        </ListitemContext.Provider>
    );
};

export const useListitems = () => {
    const context = useContext(ListitemContext);

    if (context === undefined)

    throw new Error('useListitems has to be called within a SlProvider')

    return context;
}