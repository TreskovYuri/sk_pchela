import Image from 'next/image'
import css from './Hero.module.css'

const Hero = () => {
    return (
        <div className={css.container}>
            <div className={css.textContainer}>
                <h2 className={css.city}>
                    <Image src='img/map_icon.svg' unoptimized width={100} height={100} sizes='100' className={css.mapIcon} />
                    Ремонт в Москве и МО
                </h2>
                <h1 className={css.header}>Ремонт квартиры
                начнем бесплатно!</h1>
                <h2>Оплата ремонта по факту или в <span>рассрочку</span></h2>
            </div>
            

            <div className={css.formContainer}>

            </div>
            <Image src='img/hero_bacground.webp' unoptimized width={100} height={100} sizes='100' className={css.heroBackground} />
        </div>
    )
}

export default Hero