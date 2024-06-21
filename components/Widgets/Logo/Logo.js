import css from './Logo.module.css'

const Logo = ({type='black'}) => {
  return (
    <div className={`${css.container} ${type == 'black' ? css.black : css.white}`}></div>
  )
}

export default Logo