import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'

function Cards({img, title, tech, description, repo, site }) {
    
    const [info, setInfo] = useState(false)
    
    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseEnter={InfoOn} onMouseLeave={InfoOff} className={styles.cards}>
            
            <a onMouseEnter={InfoOn} href={site}>
                <img src={img} alt='Error'></img>
            </a>
            
            {info === true &&(            
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia:</strong> {tech}</p>
                    <p>{description}</p>
                <ButtonB text='Acessar o Repositório' link={repo}/>
                </section>
            )}


        </div>
    )
}

export default Cards