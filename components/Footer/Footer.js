import Image from 'next/image'
import css from './Footer.module.css'

const Footer = () => {
  return (
    <div className={css.container}>
        <div className={css.logoContainer}>
        <Image src='img/logo_white.png' className={css.logo} unoptimized width={50} height={50} sizes='100' alt='Логотип компании'/>
        <div className={css.textContainer}>
          <span className={css.text1}>Пчела</span>
          <span className={css.text2}>Строительная компания</span>
        </div>
      </div>
    </div>
  )
}

export default Footer