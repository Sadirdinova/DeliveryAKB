import React from 'react'
import { NavLink } from 'react-router-dom'

export default function KatalogBlock({ img, title, first, second, third, fourth }) {
    return (
        <div className='bg-black shadow-custom font-bold p-4 w-full grid justify-items-center gap-2'>
            <div className='max-w-[200px] min-h-[180px]'>
                <img src={img} alt="Аккулятор" className='w-full' />
            </div>
            <p className='text-2xl'>{title}</p>
            <ul className='text-lg'>
                <li><span className='text-[#2947be]'>-</span> Стартовая мощь: {first}</li>
                <li><span className='text-[#2947be]'>-</span> Напряжение: {second}</li>
                <li><span className='text-[#2947be]'>-</span> Ёмкость: {third}</li>
                <li><span className='text-[#2947be]'>-</span> Цена: {fourth}</li>
            </ul>
            <div>
                <NavLink to={'tel:0 221 020 222'}>
                    <button className='button mr-2'>Позвонить</button>
                </NavLink>
                <NavLink target='_blank' to={'https://wa.me/+996221020222'}>
                    <button className='button'>Заказать</button>
                </NavLink>
            </div>
        </div>
    )
}
