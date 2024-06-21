"use client";
import Image from "next/image";
import css from "./Footer.module.css";
import { Link } from "react-scroll";
import Logo from "../Widgets/Logo/Logo";

const Footer = ({setModal}) => {
  return (
    <div className={css.container}>
      <div className={css.logoContainer}>
        <Logo/>
        <div className={css.textContainer}>
          <span className={css.text1}>Пчела</span>
          <span className={css.text2}>Строительная компания</span>
        </div>
      </div>
      <div className={css.linkContainer}>
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          to="price"
          className={css.Link}
        >
          Цены
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          to="price"
          className={css.Link}
        >
          Рассрочка 0%
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          to="price"
          className={css.Link}
        >
          Акции
        </Link>
      </div>
      <div className={css.linkContainer}>
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          to="price"
          className={css.Link}
        >
          Примеры работ
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          to="price"
          className={css.Link}
        >
          Отзывы
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          to="price"
          className={css.Link}
        >
          Контакты
        </Link>
      </div>
      <div className={css.numberContainer}>
        <span className={css.number}>+7 (495) 127-93-58</span>
        <span className={css.time}>Без выходных 9:00 - 22:00</span>
        <button className={css.btn} onClick={()=>setModal(true)}>Заказать звонок</button>
      </div>
      <div className={css.iconContainer}>
        <span className={css.iconHeader}>Присоединяйтесь:</span>
        <div className={css.iconBlock}>
          <a href="#"><Image src={'img/tg_icon_white.svg'} unoptimized sizes="100" width={10} height={10} className={css.icon}/></a>
          <a href="#"><Image src={'img/vk_icon_white.svg'} unoptimized sizes="100" width={10} height={10} className={css.icon}/></a>
          <a href="#"><Image src={'img/email_icon_white.svg'} unoptimized sizes="100" width={10} height={10} className={css.icon}/></a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
