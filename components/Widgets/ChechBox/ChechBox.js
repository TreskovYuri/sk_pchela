import css from './ChechBox.module.css'

const ChechBox = ({ check, setCheck, text }) => {

    return (
        <div className={css.checkRow}>
            <div onClick={() => setCheck(!check)} className={css.checkBox}>{check ? '✔' : ''}</div>
            <span className={css.text}>{text}</span>
        </div>
    );
};


export default ChechBox