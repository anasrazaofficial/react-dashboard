import React, { createContext, useContext, useState } from 'react'

const initialState = {
    cart: false,
    chat: false,
    notification: false,
    userProfile: false
}
const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(initialState)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true })
    return (
        <StateContext.Provider value={{
            activeMenu, setActiveMenu,
            isClicked, setIsClicked,
            screenSize, setScreenSize,
            currentColor, setMode,
            currentMode, setColor,
            themeSettings, setThemeSettings,
            handleClick
        }} >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)