import Image from 'next/image'
import css from './SeasonSale.module.css'

const SeasonSale = () => {
  return (
    <div className={css.container}>
      <h2 className={css.header}>Сезонные акции</h2>
      <div className={css.imgContainer}>
        <Image src={'img/sale1.jpg'} unoptimized sizes='100' width={100} height={200} className={css.img}/>
        <Image src={'img/sale2.jpg'} unoptimized sizes='100' width={100} height={200} className={css.img}/>
        <Image src={'img/sale3.jpg'} unoptimized sizes='100' width={100} height={200} className={css.img}/>
        <Image src={'img/sale4.jpg'} unoptimized sizes='100' width={100} height={200} className={css.img}/>
      </div>
    </div>
  )
}

export default SeasonSale