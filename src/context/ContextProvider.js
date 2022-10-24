import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    //for color of theme
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    //for mode [dark - light]
    const [currentMode, setCurrentMode] = useState('Light');
    //for settings of theme
    const [themeSettings, setThemeSettings] = useState(false);

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                themeSettings,
                setThemeSettings,
                setMode,
                setColor,
                setCurrentColor, setCurrentMode,
                initialState
            }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);