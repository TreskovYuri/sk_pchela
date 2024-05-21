'use client'
import Image from 'next/image'
import css from './MiOtcritiDlyaVas.module.css'
import { useState } from 'react'
import { Link } from 'react-scroll'
import ModalBlock from '../Widgets/ModalBlock/ModalBlock'
import InputMask from 'react-input-mask';
import axios from 'axios'


// Данные для отправки в телеграмм
const token = '7089513803:AAFUJXjpJAfcR-oNZ_pg7o2i964EEQ4DCWM'
const chatId = '862147971'
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage`



const MiOtcritiDlyaVas = () => {
    const [check, setCheck] = useState(true)
    const lst = ['Без темы', 'Предложение',"Претензия","Трудоустройство","Иное"]
    const [type, setType] = useState('Без темы')
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Отправитель: ${name}</b>\n`
    message += `<b>Номер: ${number}</b>\n`
    message += `<b>Тема: ${type}</b>\n`
    message += `<b>Описание: ${description}</b>\n`



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
                setDescription('')

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
        <h2 className={css.header}>Мы открыты для вас</h2>
        <span className={css.header1}>Напишите письмо, вам ответит генеральный директор или технический директор</span>
        <div className={css.blockContainer}>
            <div className={css.block}></div>
            <div className={css.block}>
                <div className={css.inputContainer}>
                    <input placeholder='Имя' className={css.input} value={name} onChange={e => setName(e.target.value)}/>
                    <InputMask className={css.input} value={number} onChange={(e) => setNumber(e.target.value)}  mask="+7 (999) 999 99-99" placeholder='Номер телефона' />
                </div>
                <div className={css.inputContainer}>
                    <ModalBlock lst={lst} setType={setType} type={type} />
                    <textarea placeholder='' className={`${css.input} ${css.area}`} value={description} onChange={e => setDescription(e.target.value)}/>
                    <div className={css.chechContainer}>
                        <span onClick={() => setCheck(!check)} className={css.checkBox}>{check ? '✔' : ''}</span>
                        <span className={css.checkDescr}>Я даю свое согласие на обработку <Link href={'/'} className={css.link} >персональных данных.</Link></span>
                    </div>
                    <button className={css.btn} onClick={click}>Отправить письмо</button>
                </div>
            </div>
        </div>
        <Image src={'img/mi_otcruiti_bacground.jpg'} width={1000} height={300} unoptimized sizes='100' className={css.bacgroundImg}/>
    </div>
  )
}

export default MiOtcritiDlyaVas