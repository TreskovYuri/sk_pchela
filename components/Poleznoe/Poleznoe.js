'use client'
import { useEffect, useState } from 'react'
import css from './Poleznoe.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Poleznoe = () => {
    const lst = [
        {
            'vopros': `Может ли измениться стоимость работ в процессе ремонта?`,
            "otvet1": `При подписании договора Вам будет выдан прайс на все ремонтные услуги с фиксированными ценами, которые не меняются до конца ремонта.`,
            "otvet2": `Сметная стоимость может измениться только, если Вы пожелаете сменить вид ремонтных работ или добавить работы, которые Вы ранее не планировали делать. В этом случае Вам необходимо будет подписать дополнительное соглашение об изменении сметной стоимости. Без Вашей подписи смета измениться не может!`,
        },
        {
            'vopros': `Как происходит оплата ремонта?`,
            "otvet1": `Оплата ремонта производится только по факту выполненных работ согласно смете.`,
            "otvet2": `Возможен наличный и безналичный вариант оплаты, а также оплата картой. Вы можете оплатить ремонт кредитной картой.`,
        },
        {
            'vopros': `Можно ли делать ремонт поэтапно?`,
            "otvet1": `Да, конечно! Вы можете смело начинать ремонт не имея полную сумму. После составления сметы замерщиком, Вам выдадут общую смету на ремонт всей квартиры, так и сметы на ремонт каждой комнаты отдельно. Начать ремонт вы можете с любой комнаты.`,
            "otvet2": `Вы имеете возможность оплатить ремонт в рассрочку без % и переплат до 6 месяцев, максимальный срок рассрочки 18 месяцев. Оформлениe рассрочки происходит в офисе.`,
        },
        {
            'vopros': `Как происходит контроль качества ремонта?`,
            "otvet1": `Контроль ремонтных работ осуществляет прораб, а также менеджеры отдела технического контроля, которые независимо от прораба, посещают объекты и следят за работами согласно СНИПов и ГОСТов.`,
            "otvet2": `Если у Вас возникли вопросы, Вы можете связаться с руководителем отдела технического контроля или с главным инженером, они с радостью ответят и проконсультируют Вас.`,
        },
    ]



    return (
        <div className={css.container}>
            <div className={css.block1}>
                <h2 className={css.header}>Полезное</h2>
                {
                    lst.map(e => (
                        <Card key={e} map={e} />
                    ))
                }
            </div>
            <div className={css.block2}>
                <div className={css.faqBox}>
                    <Image src={'img/phone.svg'} unoptimized width={20} height={20} sizes='100' className={css.phoneImg} />
                    <span className={css.BigFaq}>Остались вопросы?</span>
                    <span className={css.MiniFaq}>Мы свяжемся с вами в ближайшее время. Наши специалисты всегда рады помочь!</span>
                    <button className={css.btn}>Оставить заявку</button>
                </div>

            </div>
        </div>
    )
}

export default Poleznoe

const Card = ({ map }) => {
    const [modal, setModal] = useState(false)
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
            <div className={css.triggerBox} onClick={() => setModal(!modal)}>
                <span className={css.faq}>?</span>
                <span className={css.vopros}>{map.vopros}</span>
                <Image src={'img/arrow.svg'} unoptimized width={20} height={20} sizes='100' className={modal ? `${css.arrow} ${css.active}` : css.arrow} />
            </div>
            <motion.div className={css.modalWind} initial={{ height: 0 }} animate={{ height: modal ? `${height}vw` : 0 }}>
                <span className={css.otvet}>{map.otvet1}</span>
                <span className={css.otvet}>{map.otvet2}</span>
            </motion.div>
        </>

    )
}