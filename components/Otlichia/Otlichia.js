import Image from 'next/image'
import css from './Otlichia.module.css'

const Otlichia = () => {
    const lst1 = [
        {
            "name":"Отсутствие лицензий и документов",
            "description":"Устная договоренность. В ходе ремонта стоимость возрастает до 50%",
            "img":"img/otlichia1.svg"
        },
        {
            "name":"Обязательная предоплата",
            "description":"Всегда приходится платить наперед за работу, которой вы еще даже не видели",
            "img":"img/otlichia2.svg"
        },
        {
            "name":"Постоянные переносы срока",
            "description":"Не лицензированные компании растягивают и переносят сроки окончания ремонта",
            "img":"img/otlichia3.svg"
        },
        {
            "name":"Сомнительные «мастера»",
            "description":"Сотрудники выполняют работу некачественно, их работу не контролируют",
            "img":"img/otlichia4.svg"
        },
        {
            "name":"Покупка материалов",
            "description":"Сами выбираете материал. Тратите собственные время и силы на поездку в магазин",
            "img":"img/otlichia5.svg"
        },
    ]
    const lst2 = [
        {
            "name":"Надежность",
            "description":"Имеем строительную лицензию и допуск СРО. Гарантия до 5 лет на ремонт",
            "img":"img/otlichia6.svg"
        },
        {
            "name":"Бесплатно начинаем ремонт",
            "description":"Оплата выполненного ремонта только по факту или в рассрочку",
            "img":"img/otlichia7.svg"
        },
        {
            "name":"Четкое соблюдение сроков и плана",
            "description":"Сроки и стоимость фиксируются договором и не меняются на протяжении всего ремонта",
            "img":"img/otlichia8.svg"
        },
        {
            "name":"Лучшие мастера",
            "description":"Мастера проходят курсы и переаттестацию, все сотрудники - высококвалифицированные. 5 уровней контроля качества",
            "img":"img/otlichia9.svg"
        },
        {
            "name":"Собственный склад черновых материалов",
            "description":"Оперативный выкуп оставшегося материала по закупочным ценам",
            "img":"img/otlichia10.svg"
        },
    ]
  return (
    <div className={css.container}>
        <h2 className={css.header}>Мы отличаемся от конкурентов</h2>
        <div className={css.blockContainer}>
            <div className={css.block}>
                <h3 className={css.blockHeader}>Возможные проблемы клиентов</h3>
                <div className={css.hrgray}></div>
                {
                    lst1.map(e => (<Card  key={e.name} map={e}/>))
                }
            </div>
            <div className={css.block}>
                <h3 className={css.blockHeader}>5 причин выбрать нас</h3>
                <div className={css.hr}></div>
                {
                    lst2.map(e => (<Card  key={e.name} map={e}/>))
                }
            </div>
        </div>
    </div>
  )
}

export default Otlichia

const Card = ({map}) => {
    return(
        <div className={css.card}>
            <Image src={map.img} unoptimized sizes='100' width={50} height={50} className={css.img}/>
            <div className={css.textContainer}>
                <h4 className={css.cardName}>{map.name}</h4>
                <span className={css.cardDescription}>{map.description}</span>
            </div>
        </div>
    )
}