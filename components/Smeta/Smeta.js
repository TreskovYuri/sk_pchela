"use client"
import { useState } from 'react'
import css from './Smeta.module.css'
import { Link } from 'react-scroll'
import Image from 'next/image'

const Smeta = () => {
    const [check, setCheck] = useState(true)
    return (
        <div className={css.container}>
            <div className={css.modalWind}>
                <div className={css.textContainer}>
                    <h2 className={css.header}>Получить бесплатную смету</h2>
                    <span className={css.header1}>Выезд инженера в день обращения</span>
                    <div className={css.inputContainer}>
                        <input placeholder='Имя' className={css.input} />
                        <input placeholder='Номер' className={css.input} />
                    </div>
                    <div className={css.chechContainer}>
                        <span onClick={() => setCheck(!check)} className={css.checkBox}>{check ? '✔' : ''}</span>
                        <span className={css.checkDescr}>Я даю свое согласие на обработку <Link href={'/'} >персональных данных.</Link></span>
                    </div>
                    <button className={css.btn}>Заказать</button>
                </div>
                <div className={css.imgContainer}>
                    <Image src={'img/smeta.webp'} width={200} height={200} unoptimized sizes='100' className={css.img}/>
                </div>
            </div>
        </div>
    )
}

export default Smeta