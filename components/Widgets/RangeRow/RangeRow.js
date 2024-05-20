import css from './RangeRow.module.css'

const RangeRow = ({percent}) => {
  return (
    <div className={css.container}>
        <div className={css.percent} style={{width:`${percent}%`}}></div>
    </div>
  )
}

export default RangeRow