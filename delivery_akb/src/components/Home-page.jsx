import React, { useEffect, useRef, useState } from 'react'
import KatalogBlock from './Katalog-block'
import { NavLink } from 'react-router-dom'
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { load } from '@2gis/mapgl';
import axios from 'axios';
import banner from '../img/banner.png'
import akom from '../img/akom.jpg'
import american from '../img/american.jpg'
import barsAsia from '../img/bars-asia.webp'
import bars from '../img/bars.jpg'
import varta from '../img/varta.png'
import kainar from '../img/kainar.jpg'
import medalist from '../img/medalist.webp'
import platin from '../img/platin.png'
import zion from '../img/zion.jpeg.jpg'

function HomePage() {

    const [inputValue, setInputValue] = useState({
        name: '',
        phone: '',
        discription: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newInputValue = {
            name: inputValue.name,
            number: inputValue.phone,
            text: inputValue.discription
        }

        try {
            await axios.post('https://141.136.44.89/feedback/', newInputValue)
            console.log('success');
            alert('Спасибо за заявку! Мы свяжемся с Вами в ближайшее время.')
            setInputValue({ name: '', phone: '', discription: '' })
        } catch (error) {
            console.log('Ошибка отправки данных на сервер', error)
        }
    }

    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            load().then((mapgl) => {
                mapRef.current = new mapgl.Map('map-container', {
                    center: [74.600413, 42.866011],
                    zoom: 13,
                    key: 'bf2a7466-55f4-4de5-9c9b-3ce270765ed1',
                });

                new mapgl.Marker(mapRef.current, {
                    coordinates: [74.600413, 42.866011],
                    color: '#ff0000',
                });
            });
        }
        return () => {
            if (mapRef.current) {
                mapRef.current.destroy();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <>
            <div className='fixed z-10 bottom-7 right-7 text-white bg-[#2947be] p-4 rounded-full animate-pulse'>
                <NavLink target='_blank' to={'https://wa.me/+996221020222'}><BsWhatsapp size={50} /></NavLink>
            </div>
            <div className='text-white'>
                <div className='bg-gray-900'>
                    <div className='px-24 py-7 grid grid-cols-2 items-center gap-2 max-md:px-5 max-sm:grid-cols-1 max-sm:gap-5'>
                        <div className='space-y-4 text-center'>
                            <h1 className='text-4xl max-lg:text-3xl'>Надежные аккумуляторы в <span className='font-bold'>Бишкеке!</span></h1>
                            <p className='text-xl'>Бесплатная <span className='font-bold'>доставка, диагностика и установка круглосуточно.</span></p>
                            <div className='grid justify-items-center gap-2'>
                                <NavLink target='_blank' to={'https://wa.me/+996221020222'}>
                                    <button className='button'>Задать вопрос на WhatsApp</button>
                                </NavLink>
                                <NavLink to={'tel:0 221 020 222'}>
                                    <button className='button'>Позвонить</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className=''>
                            <img src={banner} alt="Аккумулятор" />
                        </div>
                    </div>
                </div>
                <div className='px-24 py-7 max-md:px-5'>
                    <h2 className='text-4xl text-center py-5 font-bold max-sm:text-3xl'><span className='text-[#2947be]'>Каталог</span> Аккумуляторов</h2>
                    <div className='grid grid-cols-3 gap-7 justify-items-center max-xl:grid-cols-2 max-sm:grid-cols-1'>
                        <KatalogBlock img={medalist} title={'Аккумулятор Medalist'} first={'420'} second={'12'} third={'45'} fourth={'4900'} />
                        <KatalogBlock img={american} title={'Аккумулятор American'} first={'380'} second={'12'} third={'45'} fourth={'4000'} />
                        <KatalogBlock img={barsAsia} title={'Аккумулятор Bars-Asia'} first={'350'} second={'12'} third={'45'} fourth={'4000'} />
                        <KatalogBlock img={platin} title={'Аккумулятор Platin'} first={'510'} second={'12'} third={'60'} fourth={'5600'} />
                        <KatalogBlock img={varta} title={'Аккумулятор Varta'} first={'330'} second={'12'} third={'45'} fourth={'7000'} />
                        <KatalogBlock img={kainar} title={'Аккумулятор Kainar'} first={'550'} second={'12'} third={'60'} fourth={'5200'} />
                        <KatalogBlock img={akom} title={'Аккумулятор Akom'} first={'950'} second={'12'} third={'100'} fourth={'9200'} />
                        <KatalogBlock img={bars} title={'Аккумулятор Bars'} first={'800'} second={'12'} third={'100'} fourth={'7200'} />
                        <KatalogBlock img={zion} title={'Аккумулятор Zion'} first={'500'} second={'12'} third={'60'} fourth={'4300'} />
                    </div>
                    <div className='grid justify-items-center gap-4'>
                        <h2 className='text-4xl text-center py-5 font-bold max-sm:text-3xl'>Заказать <span className='text-[#2947be]'>звонок</span></h2>
                        <form action="" className='space-y-3'>
                            <input type="text" placeholder='Имя *' className='input' value={inputValue.name}
                                onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} />
                            <input type="phone" placeholder='Телефон *' className='input' value={inputValue.phone}
                                onChange={(e) => setInputValue({ ...inputValue, phone: e.target.value })} />
                            <textarea name="" id="" placeholder='Задайте вопрос' className='input' value={inputValue.discription}
                                onChange={(e) => setInputValue({ ...inputValue, discription: e.target.value })}></textarea>
                        </form>
                        <button
                            className={` border bg-black border-[#2947be] rounded px-6 py-2 transition hover:bg-[#2947be] `}
                            onClick={handleSubmit}
                            disabled={!inputValue.name || !inputValue.phone}
                        >
                            Отправить
                        </button>
                    </div>
                    <div className='grid justify-items-center gap-4 max-w-7xl'>
                        <h2 className='text-4xl text-center pt-5 font-bold max-sm:text-3xl'>Контакты</h2>
                        <div className='flex gap-5 max-sm:flex-col max-sm:gap-1 max-sm:items-center'>
                            <NavLink className={'flex items-center gap-2'} to={'tel:0 221 020 222'}>
                                <BsTelephone size={20} />0 221 020 222 Служба доставки
                            </NavLink>
                            <NavLink className={'flex items-center gap-2 pt-1'} to={'tel:0 557 151 346'}>
                                <BsTelephone size={20} />0 557 151 346 Магазин
                            </NavLink>
                            {/* <NavLink to={'mailto:mirakb@gmail.kg'}>mirakb@gmail.kg</NavLink> */}
                            <p>ул.Панфилова, 149/2</p>
                        </div>
                        <div
                            id="map-container"
                            style={{ width: '100%', height: '500px' }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage