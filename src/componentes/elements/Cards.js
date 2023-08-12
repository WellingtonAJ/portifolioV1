import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import UseState from 'react'

function Cards({img, title, tech, description, repo, site }) {
    
    const info = []

    return(
        <div className={styles.cards} id='cards'>
            
            <a href={site}>
                <img src={img} alt='Error'></img>
            </a>
            {info.length > 1 &&(            
            
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia:</strong> {tech}</p>
                    <p>{description}</p>
                <ButtonB text='Acessar o Repositório' link={repo} />
                </section>)}


        </div>
    )
}

export default Cards