"use client"
import { useState } from 'react'
import css from './Smeta.module.css'
import { Link } from 'react-scroll'
import Image from 'next/image'
import InputMask from 'react-input-mask';
import axios from 'axios';


// Данные для отправки в телеграмм
const token = '7089513803:AAFUJXjpJAfcR-oNZ_pg7o2i964EEQ4DCWM'
const chatId = '862147971'
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage`




const Smeta = () => {
    const [check, setCheck] = useState(true)
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
        <div className={css.container}>
            <div className={css.modalWind}>
                <div className={css.textContainer}>
                    <h2 className={css.header}>Получить бесплатную смету</h2>
                    <span className={css.header1}>Выезд инженера в день обращения</span>
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
                <div className={css.imgContainer}>
                    <Image src={'img/smeta.webp'} width={200} height={200} unoptimized sizes='100' className={css.img}/>
                </div>
            </div>
        </div>
    )
}

export default Smeta