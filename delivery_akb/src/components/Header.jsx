import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import logo from '../img/logo.jpg'

function Header() {
    return (
        <div className='py-4 px-24 text-white max-md:px-5'>
            <div className='flex items-center gap-1'>
                <NavLink><img src={logo} alt="БАРС-БИШКЕК" className='w-16' /></NavLink>
                <NavLink to={'#'} className='text-2xl font-bold'>БАРС-<span className='text-[#2947be]'>БИШКЕК</span></NavLink>
            </div>
            <nav>
                <ul className='flex items-center justify-between gap-2 mt-2 max-sm:flex-col max-sm:items-end'>
                    <li className='flex items-center gap-2 mb-1'><IoLocationOutline size={20} /> ул.Панфилова, 149/2</li>
                    <li className='flex items-center gap-2'><FaRegClock size={20} />Время работы: круглосуточно</li>
                    <li><NavLink className={'flex items-center gap-2'} to={'tel:0 221 020 222'}>
                        <BsTelephone size={20} />0 221 020 222 Служба доставки
                    </NavLink>
                    <NavLink className={'flex items-center gap-2 pt-1'} to={'tel:0 557 151 346'}>
                        <BsTelephone size={20} />0 557 151 346 Магазин
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header