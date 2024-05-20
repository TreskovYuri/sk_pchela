'use client'
import Image from 'next/image'
import css from './MiOtcritiDlyaVas.module.css'
import { useState } from 'react'
import { Link } from 'react-scroll'

const MiOtcritiDlyaVas = () => {
    const [check, setCheck] = useState(true)
  return (
    <div className={css.container}>
        <h2 className={css.header}>Мы открыты для вас</h2>
        <span className={css.header1}>Напишите письмо, вам ответит генеральный директор или технический директор</span>
        <div className={css.blockContainer}>
            <div className={css.block}></div>
            <div className={css.block}>
                <div className={css.inputContainer}>
                    <input placeholder='Имя' className={css.input}/>
                    <input placeholder='Номер' className={css.input}/>
                </div>
                <div className={css.inputContainer}>
                    <input placeholder='Выберите тему' className={css.input}/>
                    <textarea placeholder='' className={`${css.input} ${css.area}`}/>
                    <div className={css.chechContainer}>
                        <span onClick={() => setCheck(!check)} className={css.checkBox}>{check ? '✔' : ''}</span>
                        <span className={css.checkDescr}>Я даю свое согласие на обработку <Link href={'/'} className={css.link} >персональных данных.</Link></span>
                    </div>
                    <button className={css.btn}>Отправить письмо</button>
                </div>
            </div>
        </div>
        <Image src={'img/mi_otcruiti_bacground.jpg'} width={1000} height={300} unoptimized sizes='100' className={css.bacgroundImg}/>
    </div>
  )
}

export default MiOtcritiDlyaVas