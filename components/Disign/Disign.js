'use client'
import { useState } from 'react'
import css from './Disign.module.css'
import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const Disign = () => {
    const [check, setCheck] = useState(true)
    const lst = [1,2,3,4,5,6,7,8,9,10]
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
                        <input placeholder='Имя' className={css.input} />
                        <input placeholder='Номер' className={css.input} />
                    </div>
                    <div className={css.chechContainer}>
                        <span onClick={() => setCheck(!check)} className={css.checkBox}>{check ? '✔' : ''}</span>
                        <span className={css.checkDescr}>Я даю свое согласие на обработку <Link href={'/'} >персональных данных.</Link></span>
                    </div>
                    <button className={css.btn}>Заказать</button>
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