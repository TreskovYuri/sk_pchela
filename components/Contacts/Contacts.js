'use client'
import Image from 'next/image'
import css from './Contacts.module.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';

const Contacts = ({setModal}) => {
    const [width,setWidth] = useState('30vw')
    const [height,setHeight] = useState('20vw')

    useEffect(()=>{
        const handleSize = () => {
            if(window.screen.width<769){
                setWidth('90vw')
                setHeight('90vw')
            }else{
                setWidth('22vw')
                setHeight('22vw')
            }
        }
        handleSize()
        window.addEventListener('resize', handleSize)
        return () => {
            window.removeEventListener('resize', handleSize)
        }

    },[])


    return (
        <div className={css.container} id='contacts'>
            <div className={css.modalWind}>
                <div className={css.textContainer}>
                    <h3 className={css.header}>Контакты</h3>
                    <span className={css.index}>117105, г. Москва</span>
                    <span className={css.adress}>Варшавское шоссе 1с1-2</span>
                    <span className={css.label}>Мы в соцсетях</span>
                    <span className={css.smm}><Image src={'img/email.svg'} unoptimized width={50} height={50} className={css.icon} />Email: info@sk-fenix.ru</span>
                    <span className={css.smm}><Image src={'img/vk.svg'} unoptimized width={50} height={50} className={css.icon} />Вконтакте: https://vk.com/sk.fenix</span>
                    <span className={css.smm}><Image src={'img/tg.svg'} unoptimized width={50} height={50} className={css.icon} />Telegram: https://t.me/gkfenix</span>
                    <span className={css.number}>+7 (495) 127-93-58</span>
                    <span className={css.time}>Без выходных 9:00 - 22:00</span>
                    <button className={css.btn} onClick={()=>setModal(true)}>Заказать звонок</button>
                    <span className={css.oferta}>Сайт не является публичной офертой и носит информационный характер.</span>
                </div>
                <div className={css.mapContainer}>
                    <YMaps>

                        <Map width={width} height={height} defaultState={{ center: [55.118977, 61.646347], zoom: 9 }}>
                            <Placemark defaultGeometry={[55.118977, 61.646347]} />
                        </Map>
                    </YMaps>
                    <span className={css.ogrn}>ООО «ГК Феникс» – ремонтно-строительная компания ИНН: 9718187577, ОГРН: 1227700116390</span>
                    <span className={css.ogrn}>Политика конфиденциальности</span>
                </div>
            </div>
        </div>
    )
}

export default Contacts