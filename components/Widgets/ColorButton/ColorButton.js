import css from './ColorButton.module.css'

const ColorButton = ({text,onPress}) => {
  return (
    <button className={css.btn} onClick={onPress}>{text}</button>
  )
}

export default ColorButton