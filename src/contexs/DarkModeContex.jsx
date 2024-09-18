import { createContext, useContext, useReducer } from "react";


const DarkContext = createContext()

function reducer(state, action) {
    switch (action.type) {
        case "change":
            return { ...state, darkMode: !state.darkMode }

        default:
            return state
    }
}

export function DarkModeProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, { darkMode: false })

    return <DarkContext.Provider value={{dispatch,state}}>
        {children}
    </DarkContext.Provider>
}

export function useDarkMode(){
    return useContext(DarkContext)
}