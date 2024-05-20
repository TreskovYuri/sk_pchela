'use client'
import css from './Poligon.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const Poligon = () => {
    const lst = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className={css.container}>
            <div className={css.textContainer}>
                <h3 className={css.header}>Полигон для проверки мастеров</h3>
                <ul className={css.ul}>
                    <li>Собственный испытательный полигон проверки мастеров</li>
                    <li>Каждый мастер, перед допуском на объект, проходит полную проверку своей квалификации. Сдает внутренний экзамен компании.</li>
                </ul>
            </div>
            <div className={css.Slider} id='poligon_slider'>
                <AliceCarousel autoWidth infinite autoPlayStrategy='default' animationEasingFunction='linear' >
                    {
                        lst.map(e => (
                            <div className={css.card} key={e}>
                                <div className={css.imgBox}>
                                    <Image src={`img/poligon${e}.webp`} unoptimized sizes='100' width={300} height={400} className={css.img} />
                                </div>
                            </div>
                        ))
                    }
                </AliceCarousel>
            </div>
        </div>
    )
}

export default Poligon