'use client'
import { useEffect, useState } from 'react';
import css from './Modal.module.css'
import InputMask from 'react-input-mask';
import {motion} from 'framer-motion'
import axios from 'axios';
// import emailjs from 'emailjs-com';
import mark from './img/mark.png'
import Link from 'next/link';
import Image from 'next/image';
import ChechBox from '../Widgets/ChechBox/ChechBox';




// Данные для отправки в телеграмм
const token = '7089513803:AAFUJXjpJAfcR-oNZ_pg7o2i964EEQ4DCWM'
const chatId = '862147971'
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage`


const Modal = ({setModal}) => {
    const [check, setCheck] = useState(false)
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error,setError] = useState(false)
    let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Отправитель: ${name}</b>\n`
    message += `<b>Номер: ${number}</b>\n`


    const click = async() => {
        
        if(!name || !number || !check){

        }else{
            setModal(false)
            setError(false)
            try {
                await axios.post(URI_API, {
                    chat_id: chatId,
                    parse_mode: 'html',
                    text: message
                });
                    // Дополнительный код, который нужно выполнить после успешного запроса
                } catch (error) {
                    // Обработка ошибок, которые могут возникнуть во время запроса
                    console.error('Ошибка при выполнении запроса:', error);
                    // Дополнительный код для обработки ошибок
                }
        }
    }

  return (
<motion.section initial={{opacity:0}} whileInView={{opacity:1}} className={css.container} onClick={()=> setModal(false)}>
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className={css.modalWind} onClick={e => e.stopPropagation()} >
        <h2 className={css.header}>Заказать звонок</h2>
        <input className={css.input} value={name} onChange={(e) => setName(e.target.value)} placeholder='Введите ваше имя'/>
        <InputMask className={css.input} value={number} onChange={(e) => setNumber(e.target.value)}  mask="+7 (999) 999 99-99" placeholder='Номер телефона' />
        <div className={css.checkContainer}>
            <ChechBox  check={check} setCheck={setCheck} text={`Я согласен с обработкой персональных данных`} />
        </div>
        
        <button className={css.btn} onClick={() => click()}>Заказать услугу</button>
        {error&&<motion.div initial={{opacity:0}} whileInView={{opacity:1}}  className={css.errorText}>Заполните обязательные поля!</motion.div>}
    </motion.div>
</motion.section>
  )
}

export default Modal