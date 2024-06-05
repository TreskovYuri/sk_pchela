import Image from 'next/image'
import css from './Rassrochka.module.css'

const Rassrochka = ({setModal}) => {
  return (
    <div className={css.container}>
        <div className={css.filter}></div>
        <div className={css.textCntainer}>
            <div className={css.cont}>
            <h2 className={css.percent}>0%</h2>
            <h2 className={css.header}>РЕМОНТ В РАССРОЧКУ ВЫГОДНО</h2>
            <ul className={css.ul}>
                <li>Без первоначального взноса</li>
                <li>Незаметно для семейного бюджета</li>
                <li>Оформление в офисе за 20 минут</li>
                <li>Сроком до 18 месяцев</li>
            </ul>
            <button className={css.button} onClick={()=>setModal(true)}>Получить рассрочку</button>
            <span className={css.policy}>
            Предоставляя услугу ремонт квартир в рассрочку, ООО «ГК Феникс» не оказывает финансовые и Банковские услуги самостоятельно. Услуги по предоставлению кредита или рассрочки предоставляются Банками РФ в соответствии с законодательством РФ.
            </span>
            </div>
        </div>
        <div className={css.imgContainer}>
            <Image src={'img/sale.png'} unoptimized width={200} height={200} sizes='100' className={css.img} alt='Изображение строителя с девушкой'/>
        </div>
        
    </div>
  )
}

export default Rassrochka