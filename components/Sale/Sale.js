import Image from 'next/image'
import css from './Sale.module.css'

const Sale = ({setModal}) => {
    
  return (
    <div className={css.container}>
        <div className={css.saleBox}>
            <div className={css.box1}>
                <h2 className={css.saleHeader}>Скидки</h2>
                <h2 className={css.saleButton}>до 19 мая</h2>
            </div>
            <div className={css.box2}>
                <h2 className={css.salePersent}>-10%</h2>
                <h2 className={css.saleDescr}>на ремонт</h2>
                <h2 className={css.salePersent}>-10%</h2>
                <h2 className={css.saleDescr}>на дизайн</h2>
                <span className={css.saleButton1} onClick={()=>setModal(true)}>Получить скидку</span>
            </div>
        </div>
        <Image src='img/sale_bacground.webp' unoptimized width={100} height={100} sizes='100' className={css.saleBackground} alt={'Фоновое изображение'} />
    </div>
  )
}

export default Sale