import Image from 'next/image'
import css from './Partners.module.css'

const Partners = () => {
  return (
    <div className={css.container}>
        <h2 className={css.header}>Наши партнеры и поставщики</h2>
        <div className={css.parnerContainer}>
            {
                Array.from({ length: 18 }, (_, i) => i + 1).map(e => (
                    <div key={e} className={css.card}>
                        <Image src={`img/partner${e}.webp`} unoptimized sizes='100' width={100} height={100} className={css.img}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Partners