import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'

import {
    Ecommerce, Orders, Calendar, Employees, Stacked,
    Pyramid, Customers, Kanban,
    Area, Bar, Pie, Financial, Color,
    Mapping, Editor, Line
} from './pages'
import './App.css'

import { useStateContext } from './context/ContextProvider';

const App = () => {

    const { setCurrentColor, setCurrentMode, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);


    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent
                            content="Settings"
                            position="Top">
                            <button type='button'
                                className="text-3xl text-white p-3 
                            hover:drop-shadow-xl hover:bg-light-gray"
                                onClick={() => setThemeSettings(true)}
                                style={{
                                    background: currentColor,
                                    borderRadius: '50%'
                                }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />
                        </div>
                    ) : (
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={
                            `dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full ${activeMenu ?
                                'md:ml-72' : 'flex-2'}`
                        }>

                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            <Navbar />
                        </div>
                        <div>

                            {themeSettings && <ThemeSettings />}
                            <Routes>
                                <Route path='/' element={<Ecommerce />} />
                                <Route path='/ecommerce' element={<Ecommerce />} />

                                <Route path='/orders' element={<Orders />} />
                                <Route path='/employees' element={<Employees />} />
                                <Route path='/customers' element={<Customers />} />

                                <Route path='/kanban' element={<Kanban />} />
                                <Route path='/calendar' element={<Calendar />} />

                                <Route path='/Abandoned Carts' element={<Area />} />
                                <Route path='/Breakdown' element={<Pie />} />
                                <Route path='/Sales' element={<Mapping />} />
                                <Route path='/Revenue by Channel' element={<Pyramid />} />

                            </Routes>
                        </div>
                        <Footer />

                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App