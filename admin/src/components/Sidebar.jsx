import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets as assets_admin } from '../assets/admin_assets/assets'

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
                <NavLink
                    to="/add"
                    className={({ isActive }) =>
                        `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ${isActive ? "bg-[#ffebf5] border-[#C586A5]" : ""
                        }`
                    }
                >
                    <img className='w-5 h-5' src={assets_admin.add_icon} alt="" />
                    <p className='hidden md:block'>Add items</p>
                </NavLink>

                <NavLink
                    to="/list"
                    className={({ isActive }) =>
                        `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ${isActive ? "bg-[#ffebf5] border-[#C586A5]" : ""
                        }`
                    }
                >
                    <img className='w-5 h-5' src={assets_admin.order_icon} alt="" />
                    <p className='hidden md:block'>List items</p>
                </NavLink>

                <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                        `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ${isActive ? "bg-[#ffebf5] border-[#C586A5]" : ""
                        }`
                    }
                >
                    <img className='w-5 h-5' src={assets_admin.order_icon} alt="" />
                    <p className='hidden md:block'>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar