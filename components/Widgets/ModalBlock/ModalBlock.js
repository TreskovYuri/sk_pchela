import css from './ModalBlock.module.css'
import { useState } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

const ModalBlock = ({lst, type, setType}) => {
    const [modal, setModal] = useState(false)

    return(
        <div className={css.modalTrigger} onClick={()=>setModal(!modal)}>
        {type}
        <span className={css.triangleBox}><Image src={'img/triangle.svg'} unoptimized width={5} height={5} className={modal?`${css.triangle} ${css.triangleActive}`:css.triangle}/></span>
    <motion.div initial={{height:0}} animate={{height: modal ? "auto" : 0}} className={css.modalWind}>
        {
            modal && lst.map(e => (
                <span key={e} className={type==e?`${css.modalItem} ${css.modalItemActive}`:css.modalItem} onClick={()=>setType(e)}>{e}</span>
            ))
        }
    </motion.div>
    </div>
    )
}

export default ModalBlock