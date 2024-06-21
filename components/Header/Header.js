'use client'
import { useState } from 'react'
import css from './Header.module.css'

import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Logo from '../Widgets/Logo/Logo'
import { Modal } from 'antd';


const Header = ({setModalForm}) => {
  const [modal, setModal] = useState(false)
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Подайте заявку и мы предложим доступные вакансии.');
  const [loading,setLoading] = useState(true)


  const showModal = () => {
    setOpen(true);
    setTimeout(()=>{
      setLoading(false)
    },[1000])
  };

  const handleOk = () => {
    setModalText('Подождите, происходит отправка заявки...');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      window.open('https://chat.whatsapp.com/IjP8i5NJVjXJUD5kDbRnVg', '_blank');
    }, 2000);

  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };



  return (
    <motion.section transition={{ duration: .3, ease: 'easeOut', delay: 3 }} className={css.container} >
      <Modal
        title="Подать заявку"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText={'Закрыть'}
        loading={loading}
        okText={'Отправить'}
        okButtonProps={{ id: 'custom-ok-button' }} 
        cancelButtonProps={{id:'custom-close-button'}}
        
        
      >
        <p>{modalText}</p>
      </Modal>
      <div className={css.logoContainer}>
        <Link spy={true} smooth={true} offset={0} duration={1500}  to="hero"><Logo /></Link>
        <div className={css.textContainer}>
          <span className={css.text1}>Пчела</span>
          <span className={css.text2}>Строительная компания</span>
        </div>
      </div>
      <a className={css.mobileNumber} href="tel:+79950404036">+7 (995) 040 40 36</a>
      <nav className={`${css.nav} ${modal && css.navActive}`}>
        <Link spy={true} smooth={true} offset={0} duration={1500} onClick={() => setModal(false)} to="price" className={css.Link} >Цены</Link>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="disign" className={css.Link} >Дизайн</Link>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="sales" className={css.Link} >Акции</Link>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="primeri" className={css.Link} >Примеры работ</Link>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="otzivi" className={css.Link} >Отзывы</Link>
        <div  className={css.Link} onClick={showModal}>Вакансии</div>
        <Link spy={true} smooth={true} offset={-50} duration={1500} onClick={() => setModal(false)} to="contacts" className={css.Link} >Контакты</Link>
        <div className={css.numberContainer}>
          <a className={`${css.Link} ${css.num}`} onClick={() => setModal(false)} href="tel:+79950404036">+7 (995) 040 40 36</a>
          <span className={css.labelNumber}>Ответим с 9:00-22:00</span>
        </div>
        <div className={css.buttonIconsContainer}>
          <div className={css.button} onClick={()=>setModalForm(true)}>Заказать звонок</div>
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