import styles from './ButtonA.module.css'

function ButtonA ({text, link}){
    return(
        <div>
            <a href={link} target='_blank' rel="noopener">
            <button className={styles.btn} id="btn">{text}</button>
            </a>
        </div>
    )
}

export default ButtonA