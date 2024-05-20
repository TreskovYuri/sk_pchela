'use client'
import css from './Sclad.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const Sclad = () => {
    const lst = [1, 2, 3, 4,5,6,7,8,9,10,11]
    return (
        <div className={css.container}>
            <div className={css.Slider} id='sclad_slider'>
                <AliceCarousel autoWidth infinite autoPlayStrategy='default' animationEasingFunction='linear'  >
                    {
                        lst.map(e => (
                            <div className={css.card} key={e}>
                                <div className={css.imgBox}>
                                    <Image src={`img/sclad${e}.webp`} unoptimized sizes='100' width={300} height={400} className={css.img} />
                                </div>
                            </div>
                        ))
                    }
                </AliceCarousel>
            </div>
            <div className={css.textContainer}>
                <h3 className={css.header}>Собственный склад черновых материалов</h3>
                <ul className={css.ul}>
                    <li>Доставка материалов на объект, в день обращения</li>
                    <li>Цены на материал от производителей</li>
                    <li>Проверенное качество материалов на сотнях объектов</li>
                    <li>Выкуп оставшегося лишнего материала</li>
                </ul>
            </div>
        </div>
    )
}

export default Sclad