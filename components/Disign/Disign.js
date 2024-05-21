'use client'
import { useState } from 'react'
import css from './Disign.module.css'
import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import InputMask from 'react-input-mask';
import axios from 'axios';

// Данные для отправки в телеграмм
const token = '7089513803:AAFUJXjpJAfcR-oNZ_pg7o2i964EEQ4DCWM'
const chatId = '862147971'
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage`



const Disign = () => {
    const [check, setCheck] = useState(true)
    const lst = [1,2,3,4,5,6,7,8,9,10]
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Отправитель: ${name}</b>\n`
    message += `<b>Номер: ${number}</b>\n`


    const click = async() => {
        
        if(!name || !number || !check){
            alert('Заполните обязательные поля!')
        }else{
            try {
                await axios.post(URI_API, {
                    chat_id: chatId,
                    parse_mode: 'html',
                    text: message
                });
                setName('')
                setNumber('')
                    // Дополнительный код, который нужно выполнить после успешного запроса
                } catch (error) {
                    // Обработка ошибок, которые могут возникнуть во время запроса
                    alert('Ошибка при отправке данных...')
                    console.error('Ошибка при выполнении запроса:', error);
                    // Дополнительный код для обработки ошибок
                }
        }
    }


    return (
        <div className={css.container} id='disign'>
            <div className={css.modalWind}>
                <div className={css.textContainer}>
                    <h2 className={css.header}>Закажите дизайн-проект</h2>
                    <ul className={css.ul}>
                        <li>Выезд и консультация дизайнера бесплатно</li>
                        <li>Бесплатный подбор материалов под Ваш бюджет</li>
                        <li>Скидка на ремонт при заказе дизайна</li>
                        <li>Экономия бюджета и времени</li>
                    </ul>
                    <div className={css.inputContainer}>
                        <input placeholder='Имя' className={css.input} value={name} onChange={e => setName(e.target.value)} />
                        <InputMask className={css.input} value={number} onChange={(e) => setNumber(e.target.value)}  mask="+7 (999) 999 99-99" placeholder='Номер телефона' />
                    </div>
                    <div className={css.chechContainer}>
                        <span onClick={() => setCheck(!check)} className={css.checkBox}>{check ? '✔' : ''}</span>
                        <span className={css.checkDescr}>Я даю свое согласие на обработку <Link href={'/'} >персональных данных.</Link></span>
                    </div>
                    <button className={css.btn} onClick={click}>Заказать</button>
                </div>
                <div className={css.slider}>
                    <AliceCarousel autoWidth infinite autoPlayStrategy='default' animationEasingFunction='linear' >
                        {
                            lst.map(e => (
                                <div key={e} className={css.card}><Image src={`img/disign${e}.webp`} unoptimized sizes='100' width={300} height={400} className={css.img}/></div>
                            ))
                        }
                    </AliceCarousel>
                </div>
            </div>
        </div>
    )
}

export default Disign