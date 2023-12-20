import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useRoutes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Orders, Calendar, Employees, Area, Bar, Pie, Financial, Ecommerce, Stacked, Pyramid, Customers, Kanban, ColorPicker, ColorMapping, Editor, Line } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

function App() {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Setting" position='Top'>
                            <button type='button' style={{ background: currentColor, borderRadius: '50%' }} className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray" onClick={() => setThemeSettings(true)}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'><Sidebar /></div>
                    ) : (
                        <div className='w-0 dark:bg-secondary-dark-bg'><Sidebar /></div>
                    )}
                    <div className={`dark:bg-main-dark-bg flex flex-col bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && <ThemeSettings />}
                            <Routes>
                                {/* Dashboard */}
                                <Route path="/" element={<Ecommerce />} />
                                <Route path="/ecommerce" element={<Ecommerce />} />

                                {/* Pages */}
                                <Route path="/orders" element={<Orders />} />
                                <Route path="/employees" element={<Employees />} />
                                <Route path="/customers" element={<Customers />} />

                                {/* Apps */}
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/kanban" element={<Kanban />} />
                                <Route path="/editor" element={<Editor />} />
                                <Route path="/color-picker" element={<ColorPicker />} />

                                {/* Charts */}
                                <Route path="/line" element={<Line />} />
                                <Route path="/area" element={<Area />} />
                                {/* <Route path="/bar" element={<Bar />} />
                                <Route path="/pie" element={<Pie />} />
                                <Route path="/financial" element={<Financial />} />
                                <Route path="/color-mappping" element={<ColorMapping />} />
                                <Route path="/pyramid" element={<Pyramid />} />
                                <Route path="/stacked" element={<Stacked />} /> */}
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
