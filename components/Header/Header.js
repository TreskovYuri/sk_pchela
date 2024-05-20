'use client'
import { useState } from 'react'
import css from './Header.module.css'

import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'


const Header = () => {
  const [modal, setModal] = useState(false)
  return (
    <motion.section transition={{ duration: .3, ease: 'easeOut', delay: 3 }} className={css.container}>
      <div className={css.logoContainer}>
        <Image src='img/logo.png' className={css.logo} unoptimized width={50} height={50} sizes='100' alt='Логотип компании'/>
        <div className={css.textContainer}>
          <span className={css.text1}>Пчела</span>
          <span className={css.text2}>Строительная компания</span>
        </div>
      </div>
      <a className={css.mobileNumber} href="tel:+79950404036">+7 (995) 040 40 36</a>
      <nav className={`${css.nav} ${modal && css.navActive}`}>
        <div className={css.cityContainer}>
          <span className={css.city1}>Пчела</span>
          <span className={css.city2}>Строительная компания</span>
        </div>
        <Link spy={true} smooth={true} offset={0} duration={1500} onClick={() => setModal(false)} to="price" className={css.Link} >Цены</Link>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="disign" className={css.Link} >Дизайн</Link>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="contacts" className={css.Link} >Акции</Link>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="primeri" className={css.Link} >Примеры работ</Link>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="contacts" className={css.Link} >Отзывы</Link>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="contacts" className={css.Link} >Контакты</Link>
        <div className={css.numberContainer}>
          <a className={`${css.Link} ${css.num}`} onClick={() => setModal(false)} href="tel:+79950404036">+7 (995) 040 40 36</a>
          <span className={css.labelNumber}>Ответим с 9:00-22:00</span>
        </div>
        <div className={css.buttonIconsContainer}>
          <div className={css.button}>Заказать звонок</div>
          <div className={css.iconsBlock}>
            <Image src='img/vk_icon.svg' className={css.icon} unoptimized width={50} height={50} sizes='100' alt='Иконка социальной сети'/>
            <Image src='img/tg_icon.svg' className={css.icon} unoptimized width={50} height={50} sizes='100' alt='Иконка социальной сети'/>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={css.close} onClick={() => setModal(!modal)} >x</motion.div>
      </nav>
      <div className={css.butgerTrigger} onClick={() => setModal(!modal)}>|||</div>
    </motion.section>
  )
}

export default Header