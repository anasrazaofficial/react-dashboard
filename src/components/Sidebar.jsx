import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

function Sidebar() {
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) setActiveMenu(false)
    }
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-white bg-gray-700';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';
    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (
                <div>
                    <div className='flex justify-between items-center'>
                        <Link to='/' onClick={() => handleCloseSidebar} className='flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold text-slate-900 tracking-tight dark:text-white'>
                            <SiShopware /> <span>Shoppy</span>
                        </Link>
                        <TooltipComponent content="Menu" position="BottomCenter">
                            <button type='button' className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block' onClick={() => setActiveMenu(
                                (prev) => !prev
                            )
                            }>
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className='mt-10'>
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className='text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
                                {item.links.map((link) => (
                                    <NavLink to={link.name} onClick={handleCloseSidebar} key={link.name} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : '' })}
                                        className={({ isActive }) => isActive ? `${activeLink}` : `${normalLink}`}>
                                        {link.icon}
                                        <span className='capitalize'>{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default Sidebar
