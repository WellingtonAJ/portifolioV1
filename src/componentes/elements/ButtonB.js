import styles from './ButtonB.module.css'

function ButtonB({text,link}) {
    return(
        <div>
            <a href={link} target='_blank' rel="noopener">
            <button className={styles.btn} id='btn' >{text}</button>
            </a>
        </div>
    )
}

export default ButtonB