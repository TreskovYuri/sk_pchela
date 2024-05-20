'use client'
import { useEffect, useRef, useState } from 'react'
import css from './Price.module.css'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Image from 'next/image'


const Price = () => {
    const type1 = [
        {
            "name": "Евро",
            'description': "Ремонт с применением современных технологий, по стандартам DIN.",
            'priceSale': 9490,
            "price": 7490,
            "demontazh": ['Существующих стен и перегородок'],
            "chernovie": ['Подбор и расчет материалов', 'Кладка блоков (стен)', 'Гидроизоляция мокрых зон', 'Штукатурка стен и потолка', 'Шпатлевка стен и потолка',
                'Монтаж труб ХВС,ГВС и канализации', 'Монтаж Электропроводки', 'Монтаж отопительных систем', 'Стяжка пола', 'Наливной самовыравнивающийся пол'],
            "chistovie": ['Подбор чистовых материалов', 'Формирование ниши', 'Поклейка обоев', 'Покраска стен и потолков', 'Монтаж напольных покрытий', 'Монтаж плинтусов', 'Монтаж потолочного покрытия',
                'Укладка плитки', 'Монтаж электроточек', 'Установка сантехники'
            ]
        },
        {
            "name": "Дизайнерский",
            'description': "Рассчитывается индивидуально от дизайн-проекта, скидка 10% на дизайн проект",
            'priceSale': 0,
            "price": 0,
            "demontazh": ['Существующих стен и перегородок'],
            "chernovie": ['Подбор и расчет материалов', 'Кладка блоков (стен)', 'Гидроизоляция мокрых зон', 'Штукатурка стен и потолка', 'Шпатлевка стен и потолка',
                'Монтаж труб ХВС,ГВС и канализации', 'Монтаж Электропроводки', 'Монтаж отопительных систем', 'Стяжка пола', 'Наливной самовыравнивающийся пол', 'Перепланировка'],
            "chistovie": ['Авторский надзор', 'Подбор чистовых материалов', 'Формирование ниши', 'Поклейка обоев', 'Покраска стен и потолков', 'Монтаж напольных покрытий', 'Монтаж плинтусов', 'Монтаж потолочного покрытия',
                'Укладка плитки', 'Монтаж электроточек', 'Установка сантехники'
            ]
        },
        {
            "name": "Черновой",
            'description': "Стяжка пола, отштукатурим и отшпаклюем стены, поставим гидроизоляции.",
            'priceSale': 3790,
            "price": 2990,
            "demontazh": ['Существующих стен и перегородок'],
            "chernovie": ['Подбор и расчет материалов', 'Кладка блоков (стен)', 'Гидроизоляция мокрых зон', 'Штукатурка стен и потолка', 'Шпатлевка стен и потолка',
                'Монтаж труб ХВС,ГВС и канализации', 'Монтаж Электропроводки', 'Монтаж отопительных систем', 'Стяжка пола', 'Наливной самовыравнивающийся пол'],
            "chistovie": 0
        },
        {
            "name": "Капитальный",
            'description': "Выравнивание стен и полов, замена всей электрики и сантехники. Финишные отделочные работы.",
            'priceSale': 6890,
            "price": 5490,
            "demontazh": ['Существующих стен и перегородок'],
            "chernovie": ['Подбор и расчет материалов', 'Кладка блоков (стен)', 'Гидроизоляция мокрых зон', 'Штукатурка стен и потолка', 'Шпатлевка стен и потолка',
                'Монтаж труб ХВС,ГВС и канализации', 'Монтаж Электропроводки', 'Монтаж отопительных систем', 'Стяжка пола', 'Наливной самовыравнивающийся пол'],
            "chistovie": ['Подбор чистовых материалов', 'Поклейка обоев', 'Покраска стен и потолков', 'Монтаж напольных покрытий', 'Монтаж плинтусов', 'Монтаж потолочного покрытия',
                'Укладка плитки', 'Монтаж электроточек', 'Установка сантехники'
            ]
        },
    ]

    const type2 = [
        {
            "name": "Евро",
            'description': "Ремонт с применением современных технологий, по стандартам DIN.",
            'priceSale': 9490,
            "price": 7490,
            "demontazh": ['Перегородок', 'Старой проводки', 'Напольного покрытия', 'Покрытия стен', 'Потолочного покрытия', 'Стяжки', 'Труб ХВС, ГВС и канализации', 'Дверей и окон'],
            "chernovie": ['Подбор и расчет материалов', 'Штукатурка стен и потолка', 'Гидроизоляция мокрых зон', 'Шпатлевка стен и потолка', 'Монтаж труб ХВС,ГВС и канализации',
                'Монтаж Электропроводки', 'Монтаж отопительных систем', 'Стяжка пола', 'Наливной самовыравнивающийся пол', 'Отделка откосов'
            ],
            "chistovie": ['Подбор чистовых материалов', 'Формирование ниши', 'Поклейка обоев', 'Покраска стен и потолков', 'Монтаж напольных покрытий', 'Монтаж плинтусов', 'Монтаж потолочного покрытия',
                'Укладка плитки', 'Монтаж электроточек', 'Установка сантехники'
            ]
        },
        {
            "name": "Дизайнерский",
            'description': "Рассчитывается индивидуально от дизайн-проекта, скидка 10% на дизайн проект",
            'priceSale': 0,
            "price": 0,
            "demontazh": ['Перегородок', 'Старой проводки', 'Напольного покрытия', 'Покрытия стен', 'Потолочного покрытия', 'Стяжки', 'Труб ХВС, ГВС и канализации', 'Дверей и окон'],
            "chernovie": ['Подбор и расчет материалов', 'Кладка блоков (стен)', 'Гидроизоляция мокрых зон', 'Штукатурка стен и потолка', 'Шпатлевка стен и потолка',
                'Монтаж труб ХВС,ГВС и канализации', 'Монтаж Электропроводки', 'Монтаж отопительных систем', 'Стяжка пола', 'Наливной самовыравнивающийся пол', 'Перепланировка'],
            "chistovie": ['Авторский надзор', 'Подбор чистовых материалов', 'Формирование ниши', 'Поклейка обоев', 'Покраска стен и потолков', 'Монтаж напольных покрытий', 'Монтаж плинтусов', 'Монтаж потолочного покрытия',
                'Укладка плитки', 'Монтаж электроточек', 'Установка сантехники'
            ]
        },
        {
            "name": "Косметический",
            'description': "Обновим ремонт без выравнивания: заменим обои и ламинат, покрасим потолок.",
            'priceSale': 3790,
            "price": 2990,
            "demontazh": ['Напольного покрытия', 'Покрытия стен', 'Потолочного покрытия'],
            "chernovie": ['Подбор и расчет материалов', 'Штукатурка стен и потолка', 'Шпатлевка стен и потолка',
                'Стяжка пола', 'Наливной самовыравнивающийся пол'],
            "chistovie": 0
        },
        {
            "name": "Капитальный",
            'description': "Выравнивание стен и полов, замена всей электрики и сантехники. Финишные отделочные работы.",
            'priceSale': 6890,
            "price": 5490,
            "demontazh": ['Перегородок', 'Старой проводки', 'Напольного покрытия', 'Покрытия стен', 'Потолочного покрытия', 'Стяжки', 'Труб ХВС, ГВС и канализации', 'Дверей и окон'],
            "chernovie": ['Подбор и расчет материалов', 'Штукатурка стен и потолка', 'Гидроизоляция мокрых зон', 'Шпатлевка стен и потолка', 'Монтаж труб ХВС,ГВС и канализации', 'Монтаж Электропроводки',
                'Монтаж отопительных систем', 'Стяжка пола', 'Наливной самовыравнивающийся пол'
            ],
            "chistovie": ['Подбор чистовых материалов', 'Поклейка обоев', 'Покраска стен и потолков', 'Монтаж напольных покрытий', 'Монтаж плинтусов', 'Монтаж потолочного покрытия',
                'Укладка плитки', 'Монтаж электроточек', 'Установка сантехники'
            ]
        },
    ]

    const [type, setType] = useState(false)
    return (
        <div className={css.container} id='price'>
            <h2 className={css.header}>Цены на комплексные ремонты</h2>
            <h3 className={css.header1}>Ремонтируем квартиры «под ключ» и отдельные помещения</h3>
            <div className={css.buttonContainer}>
                <span className={type ? `${css.button} ${css.avtiveButton}` : css.button} onClick={() => setType(true)}>Новостройка</span>
                <span className={!type ? `${css.button} ${css.avtiveButton}` : css.button} onClick={() => setType(false)}>Вторичка</span>
            </div>
            {type ? <TypeHandler map={type1} type={type} /> : <TypeHandler map={type2} type={type} />}

        </div>
    )
}

export default Price


const TypeHandler = ({ map, type }) => {
    if (!type) {
        return (
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className={css.cardContainer}>
                {
                    map.map(e => (
                        <div className={css.card} key={e.name}>
                            {e.name == 'Капитальный'&&<Image src={'img/hit.svg'} unoptimized width={20} height={100} sizes='100' className={css.hit}/>}
                            <h2 className={css.cardName}>{e.name}</h2>
                            <div className={css.descriptionContainer}>
                                <span className={css.faq}>?</span>
                                <span className={css.description}>{e.description}</span>
                            </div>
                            <div className={css.priceContaiener}>
                                {
                                    e.price ?
                                        <>
                                            <span className={css.salePrice}>от {e.priceSale}руб./м²</span>
                                            <span className={css.price}>от {e.price}руб./м²</span>
                                        </> :
                                        <>
                                            <span className={css.disDescr}>индивидуально от дизайн-проекта, скидка 10% на дизайн проект</span>
                                        </>
                                }
                            </div>

                            <ModalBlock chernovie={e.chernovie} chistovie={e.chistovie} demontazh={e.demontazh} />
                            <button className={css.cardButton}>Рассчитать стоимость</button>
                        </div>
                    ))
                }
            </motion.div>
        )
    }else{
        return (
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className={css.cardContainer}>
                {
                    map.map(e => (
                        <div className={css.card}>
                            {e.name == 'Капитальный'&&<Image src={'img/hit.svg'} unoptimized width={20} height={100} sizes='100' className={css.hit}/>}
                            <h2 className={css.cardName}>{e.name}</h2>
                            <div className={css.descriptionContainer}>
                                <span className={css.faq}>?</span>
                                <span className={css.description}>{e.description}</span>
                            </div>
                            <div className={css.priceContaiener}>
                                {
                                    e.price ?
                                        <>
                                            <span className={css.salePrice}>от {e.priceSale}руб./м²</span>
                                            <span className={css.price}>от {e.price}руб./м²</span>
                                        </> :
                                        <>
                                            <span className={css.disDescr1}>Скидка <span>10% </span>на дизайн проект</span>
                                        </>
                                }
                            </div>

                            <ModalBlock chernovie={e.chernovie} chistovie={e.chistovie} demontazh={e.demontazh} />
                            <button className={css.cardButton}>Рассчитать стоимость</button>
                        </div>
                    ))
                }
            </motion.div>
        )
    }
}


const ModalBlock = ({ demontazh, chernovie, chistovie }) => {
    const [demontazhModal, setDemontazhModal] = useState(false);
    const [chernovieModal, setChernovieModal] = useState(false);
    const [chistovieModal, setChistovieModal] = useState(false);
    const [height, setHeight] = useState(10)

    useEffect(()=>{
        const width = window.screen.width
        if(width<=768){
            setHeight(50)
        }else{
            setHeight(10)
        }
    },[])


    return (
        <>
            <div className={css.modalTrigger} onClick={() => setDemontazhModal(!demontazhModal)}>
                <span className={css.modalTriggername}>Демонтажные работы</span>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={css.modalTriggerIcon}
                >
                    {demontazhModal ? '-' : '+'}
                </motion.span>
            </div>
            <motion.div animate={{ height: demontazhModal ? `${height*0.8}vw` : 0, paddingTop: demontazhModal ? '1vw' : 0 }} className={css.workList}>
                {demontazh.map((e, index) => (
                    <span key={index} className={css.workItem}>{e}</span>
                ))}
            </motion.div>
            <div className={css.modalTrigger} onClick={() => setChernovieModal(!chernovieModal)}>
                <span className={css.modalTriggername}>Черновые работы</span>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={css.modalTriggerIcon}
                >
                    {chernovieModal ? '-' : '+'}
                </motion.span>
            </div>
            <motion.div initial={{ height: 0, }} animate={{ height: chernovieModal ? `${height}vw` : 0, paddingTop: chernovieModal ? '1vw' : 0 }} className={css.workList}>
                {chernovie.map((e, index) => (
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} key={index} className={css.workItem}>{e}</motion.span>
                ))}
            </motion.div>
            {
                chistovie != 0 &&
                <>
                    <div className={css.modalTrigger} onClick={() => setChistovieModal(!chistovieModal)}>
                        <span className={css.modalTriggername}>Чистовые работы</span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className={css.modalTriggerIcon}
                        >
                            {chistovieModal ? '-' : '+'}
                        </motion.span>
                    </div>
                    <motion.div initial={{ height: 0, }} animate={{ height: chistovieModal ? `${height*1.1}vw` : 0, paddingTop: chistovieModal ? '1vw' : 0 }} className={css.workList}>
                        {chernovie.map((e, index) => (
                            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} key={index} className={css.workItem}>{e}</motion.span>
                        ))}
                    </motion.div>
                </>
            }
        </>
    );
};
