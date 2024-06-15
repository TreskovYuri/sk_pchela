import Image from 'next/image'
import css from './Controlls.module.css'

const Controlls = () => {

    const lst = [
        {
            "name": "Миронов Владислав Дмитриевич",
            "Img": "img/control1.jpg",
            "post": "Технический директор",
            "description": "Контролирует выполнение ремонтно-строительных работ, проводит технические аудиты, согласовывает сроки, бюджет"
        },
        {
            "name": "Уваров Антон Сергеевич",
            "Img": "img/control2.jpg",
            "post": "Начальник участка",
            "description": "Управляет строительным производством, принимает и контролирует качество выполненных строительных работ, руководит сотрудниками на объекте"
        },
        {
            "name": "Козин Сергей Михайлович",
            "Img": "img/disigner.jpg",
            "post": "Дизайнер",
            "description": "Контролируют проектные решения, требования нормативных документов, качество строительно-монтажных работ, соответствие стоимости строительства объекта"
        },
        {
            "name": "Карапетян Игорь Алекстандрович",
            "Img": "img/control4.jpg",
            "post": "Прораб на объекте",
            "description": "Планирует и организовывает строительный процесс, контролирует всех сотрудников на объекте"
        },
        {
            "name": "Крылов Кирилл Дмитриевич",
            "Img": "img/control5.jpg",
            "post": "Персональный менеджер",
            "description": "Составляет смету, помогает с подбором чистового и чернового материала, контролирует весь процесс, решает спорные ситуации"
        },
        {
            "name": "Онлайн камеры",
            "Img": "img/control6.webp",
            "post": "",
            "description": "Контроль Вашего объекта 24 часа, 7 дней в неделю"
        },

    ]

    return (
        <div className={css.container}>
            <h2 className={css.header}>Строгий контроль качества</h2>
            <span className={css.header1}>Ваш объект контролируют:</span>
            <div className={css.cardContainer}>
                {
                    lst.map(e => (
                        <div className={css.card} key={e.name}>
                            <div className={css.imgContainer}><Image src={e.Img} unoptimized sizes='100' width={300} height={300} className={css.cardImg} /></div>
                            <div className={css.textContainer}>
                                <h3 className={css.cardName}>{e.name}</h3>
                                <span className={css.cardPost}>{e.post}</span>
                                <span className={css.cardDescription}>{e.description}</span>
                            </div>

                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Controlls