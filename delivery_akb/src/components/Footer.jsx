import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.jpg'

export default function Footer() {

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='flex justify-between items-center py-4 px-24 text-white max-md:px-5 max-sm:flex-col max-sm:gap-3'>
            <NavLink to={'#'} onClick={handleScroll} className='flex items-center gap-1 text-white text-2xl font-bold max-sm:text-xl'>
                <img src={logo} alt="Барс-Бишкек" className='w-16' />
                БАРС-<span className='text-[#2947be]'>БИШКЕК</span>
            </NavLink>
            <div className='max-sm:grid max-sm:justify-items-center'>
                <NavLink className={'flex items-center gap-2'} to={'tel:0 221 020 222'}>
                    <BsTelephone size={20} />0 221 020 222 Служба доставки
                </NavLink>
                <NavLink className={'flex items-center gap-2 pt-1'} to={'tel:0 557 151 346'}>
                    <BsTelephone size={20} />0 557 151 346 Магазин
                </NavLink>
            </div>
        </div>
    )
}
