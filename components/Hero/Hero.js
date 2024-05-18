import Image from 'next/image'
import css from './Hero.module.css'


const Hero = () => {
    const lst = [
        {
            "name":"Фиксированная смета",
            "description":"стоимость работ не растет в процессе ремонта",
            "icon":"img/hero_card1_icon.svg"
        },
        {
            "name":"Гарантия до 5 лет",
            "description":"на все виды ремонтных работ",
            "icon":"img/hero_card2_icon.svg"
        },
        {
            "name":"Собственный склад",
            "description":"черновых материалов",
            "icon":"img/hero_card3_icon.svg"
        },
        {
            "name":"Контроль качества",
            "description":"5 уровней контроля всех процессов",
            "icon":"img/hero_card4_icon.svg"
        },
    ]
    return (
        <div className={css.container}>
            <div className={css.textContainer}>
                <h2 className={css.city}>
                    <Image src='img/map_icon.svg' unoptimized width={100} height={100} sizes='100' className={css.mapIcon} alt='Иконка карты'/>
                    Ремонт в Москве и МО
                </h2>
                <h1 className={css.header}>Ремонт квартиры
                начнем бесплатно!</h1>
                <h2 className={css.description}>Оплата ремонта по факту или в <span>рассрочку</span></h2>
                <div className={css.cardContainer}>
                    {
                        lst.map(e => (
                            <div  key={e.name} className={css.card}>
                                <Image src={e.icon} unoptimized width={200} height={200} sizes='100' alt=''className={css.cardImg} />
                                <div className={css.cardTextContainer}>
                                    <h2 className={css.cardName}>{e.name}</h2>
                                    <span className={css.cardDescription}>{e.description}</span>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
            

            <div className={css.formContainer}>

            </div>
            <Image src='img/hero_bacground.webp' unoptimized width={100} height={100} sizes='100' className={css.heroBackground} alt={'Фоновое изображение'} />
        </div>
    )
}

export default Hero