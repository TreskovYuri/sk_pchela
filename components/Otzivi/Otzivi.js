'use client'
import css from './Otzivi.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const Otzivi = () => {
    const lst = [
        {
            'img': "img/otziv_icon1.png",
            'name':"Геннадий",
            "otziv":`Выбирали между тремя компаниями, но отзывчивость, понимание и профессионализм сотрудников фирмы “Пчела” взяли свое. 
            После обращения, на следующий день приехал сметчик Андрей, обозначил сроки и предварительную стоимость работ, которые устроили обе стороны. 
            После была назначена встреча с прорабом Ринатом, итогом которой стало заключение нашего договора. Все работы выполнены согласно сметы, 
            поэтапно и без каких либо расхождений. Прораб Ринат был на связи 24/7, всегда заинтересован в общении с клиентом и готов решить любые 
            проблемы. Всегда предлагает варианты решений любых ситуаций( как проще, как удобнее, как комфортнее). Заранее ориентирует по срокам и суммам, 
            чтобы можно было не в ущерб бюджету своевременно вносить оплаты за выполненные акты. Можно много писать всего позитивного
            (т.к. негатив полностью отсутствует) скажу проще, что данная Компания полностью оправдала наши ожидания. Огромное Вам спасибо.`
        },
        {
            'img': "img/otziv_icon2.png",
            'name':"Оксана",
            "otziv":`Спасибо огромное ск феникс за качественный и красивый ремонт. Особо хотелось бы отметить профессионализм нашего замечательного прораба Сергея.`
        },
        {
            'img': "img/otziv_icon3.png",
            'name':"Андрей",
            "otziv":`Мы с супругой купили 2-х комнатную квартиру без отделки. Была необходимость выполнить ремонт в очень сжатые сроки и в то же время качественно.
            На объект приглашались несколько представителей разных ремонтных компаний, где обсуждалось всё, что связано с предстоящим ремонтом и пожеланиями в рамках нашего бюджета. 
            Уже на этой встрече лучше всех с технической и финансовой стороны выглядели предложения и комментарии, сделанные представителями компании Феникс. 
            ыла заметна подкованность во всех нюансах ремонта, сроков, планировании и закупок материала. Также сразу на первой встрече предоставили нам смету на ремонт, 
            от которой не отступали на протяжении всего срока.
            Ввиду занятости и частого отсутствия в городе меня и моей супруги, мы вели постоянный диалог и обсуждения в чате, где по просьбе всегда в полном объеме рассылались 
            фото и видео проделанного ремонта на каждом этапе – от фоток разгрузки материала, подъёма в квартиру, выноса строительного мусора до возведения стен, 
            перегородок, покрытия грунтовкой, штукатурки, нарезка штробы, прокладки кабеля и тд. Очень удобно, что постоянно заранее предоставлялись акты на работы, 
            ведомости на материалы. Оплачивали выполненные работы каждый раз по факту.
            Перед закупкой материла прораб предварительно предоставлял информацию по магазинам, по ценам на те или иные позиции.
            По опыту ремонта предыдущей квартиры, у нас была некоторая предвзятость к ремонтным компаниям, но тут ребята из компании Феникс превзошли наши ожидания, показали свой профессионализм и честность в процессе работ.
            В общем с задачей справились в обещанные сроки, в течение двух месяцев выполнили черновую и чистовую отделку квартиры, а также предоставили гарантию на свои работы, это говорит о многом!
            `
        },
        {
            'img': "img/otziv_icon2.png",
            'name':"Мария",
            "otziv":`Закончился наш ремонт с компанией феникс. Изначально понравилось, что инженер все очень четко рассчитал и даже дал пару советов как можно уменьшить стоимость.
            Ремонт обещали сделать за 4.5 месяца ( у нас двушка). Просрочили сдачу на день, но ничего страшного, да и произошло это по нашей вине (проблемы с поставками были)
            Рабочие не халтурили, делали все аккуратно.
            По итогу ремонт оцениваю на твердую 5 из 5.
            `
        },
        {
            'img': "img/otziv_icon3.png",
            'name':"Арсен",
            "otziv":`Первым контактом с компанией Феникс был созвон с менеджером. Молодой человек все подробно рассказал, сказал, что для оценки точной стоимости требуется выезд сметчика. 
            Приехал сметчик, все замерил. В этот же день получили точную стоимость ремонта. Согласились на ремонт. Работы выполнены качественно, нареканий не обнаружил.`
        },

    ]
  return (
    <div className={css.container} id='otzivi'>
        <h2 className={css.header}>Отзывы наших клиентов</h2>
        <div className={css.slider}  id='otzivi_slider'>
            <AliceCarousel autoWidth infinite autoPlayStrategy='default' animationEasingFunction='linear' >
                {
                    lst.map(e => (
                        <Card e={e} key={e}/>
                    ))
                }
            </AliceCarousel>
        </div>
    </div>
  )
}

export default Otzivi

const Card = ({ e }) => {
    return (
        <div className={css.card}>
                <Image src={e.img} unoptimized sizes='100' width={300} height={500} className={css.cardImg} />
                <div className={css.textContainer}>
                    <p className={css.otziv}>{e.otziv} </p>
                    <span className={css.name}>{e.name}</span>
                </div>
        </div>
    )
}