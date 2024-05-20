'use client'

import css from './Sertificats.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const Sertificats = () => {
    const lstNew = [
        {
            'img': "img/sertificat1.webp"
        },
        {
            'img': "img/sertificat2.webp"
        },
        {
            'img': "img/sertificat3.webp"
        },
        {
            'img': "img/sertificat4.webp"
        },
    ]
    return (
        <div className={css.containter} id='primeri'>
            <h2 className={css.header}>Сертификаты и лицензии</h2>
            <TypeHandler lst={lstNew} />
        </div>
    )
}

export default Sertificats

const TypeHandler = ({ lst }) => {
    return (
        <div className={css.slider} id='sertificats'>
            <AliceCarousel autoWidth infinite autoPlayStrategy='default' animationEasingFunction='linear' >
                {
                    lst.map(e => (
                        <Card e={e} key={e}/>
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
            </div>
        </div>
    )
}