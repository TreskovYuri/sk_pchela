'use client'
import { useState } from 'react'
import css from './PrimeriRabot.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const PrimeriRabot = () => {
    const [type, setType] = useState(false)
    const lstNew = [
        {
            'type': "Ремонт под ключ",
            'name': "Двухкомнатная квартира 59 м²",
            'price': "410 000 руб.",
            'days': "48 дней",
            'img': "img/primer1.webp"
        },
        {
            'type': "Евро ремонт",
            'name': "Двухкомнатная квартира 62 м²",
            'price': "640 000 руб.",
            'days': "68 дней",
            'img': "img/primer2.webp"
        },
        {
            'type': "Дизайнерский ремонт",
            'name': "Трехкомнатная квартира 74 м²",
            'price': "857 000 руб.",
            'days': "81 день",
            'img': "img/primer3.webp"
        },
        {
            'type': "Евро ремонт",
            'name': "Трехкомнатная квартира 67 м²",
            'price': "589 000 руб.",
            'days': "61 день",
            'img': "img/primer4.webp"
        },
        {
            'type': "Капитальный ремонт",
            'name': "Двухкомнатная квартира 54 м²",
            'price': "430 000 руб.",
            'days': "59 дней",
            'img': "img/primer5.webp"
        },
    ]
    return (
        <div className={css.containter} id='primeri'>
            <h2 className={css.header}>Примеры наших работ</h2>
            <div className={css.buttonContainer}>
                <span className={type ? `${css.button} ${css.avtiveButton}` : css.button} onClick={() => setType(true)}>Новостройка</span>
                <span className={!type ? `${css.button} ${css.avtiveButton}` : css.button} onClick={() => setType(false)}>Вторичка</span>
            </div>
            <TypeHandler lst={lstNew} />
        </div>
    )
}

export default PrimeriRabot

const TypeHandler = ({ lst }) => {
    return (
        <div className={css.slider}>
            <AliceCarousel autoWidth infinite autoPlayStrategy='default' animationEasingFunction='linear' >
                {
                    lst.map(e => (
                        <Card e={e} />
                    ))
                }
            </AliceCarousel>
        </div>

    )

}


const Card = ({ e }) => {
    return (
        <div className={css.card}>
            <div className={css.podCard}>
                <Image src={e.img} unoptimized sizes='100' width={300} height={500} className={css.cardImg} />
                <div className={css.footer}>{e.type}</div>
                <div className={css.infoBlock}>
                    <h3 className={css.cardName}>{e.name}</h3>
                    <span className={css.cardLabel}>Стоимость работ</span>
                    <span className={css.cardPrice}>{e.price}</span>
                    <span className={css.cardLabel}>Срок {e.days}</span>
                </div>
            </div>
        </div>
    )
}