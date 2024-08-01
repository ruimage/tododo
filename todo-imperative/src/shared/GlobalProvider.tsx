import React, { createContext, type FC, useReducer, type ReactNode, type Dispatch } from "react";

type FilterSettings = {
    filterByTitle: string | null;
    filterByCompleted: boolean | null;
    filterByUser: number | null;
};

type Action =
    | { type: 'setFilterByTitle'; payload: string | null }
    | { type: 'setFilterByCompleted'; payload: boolean | null }
    | { type: 'setFilterByUser'; payload: number | null };

const initialFilterSettings: FilterSettings = {
    filterByTitle: null,
    filterByCompleted: null,
    filterByUser: null
};

const globalReducer = (state: FilterSettings, action: Action): FilterSettings => {
    switch (action.type) {
        case 'setFilterByTitle':
            return { ...state, filterByTitle: action.payload };
        case 'setFilterByCompleted':
            return { ...state, filterByCompleted: action.payload };
        case 'setFilterByUser':
            return { ...state, filterByUser: action.payload };
        default:
            return state;
    }
};

const GlobalContext = createContext<{
    filterSettings: FilterSettings;
    setFilterSettings: Dispatch<Action>;
}>({
    filterSettings: initialFilterSettings,
    setFilterSettings: () => null // initial no-op function
});

export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [filterSettings, setFilterSettings] = useReducer(globalReducer, initialFilterSettings);

    return (
        <GlobalContext.Provider value={{ filterSettings, setFilterSettings }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
