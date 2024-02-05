import React, { useContext, useState } from "react";

const ThemeContext = useContext;
export const useTheme= () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new error('context is not valid');
    }
    return context;
}
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');

    function toggleTheme(){
        setTheme(theme => theme === 'dark' ? 'light' : 'dark');
    }

    const themeValues = {
        theme,
        toggleTheme
    }
    
    return(
        <ThemeContext.Provider value={themeValues}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;