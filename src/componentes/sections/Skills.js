import styles from './Skills.module.css'
import javascript from '../../Image/Skills/javascript.svg'
import html from '../../Image/Skills/html.svg'
import css from '../../Image/Skills/css.svg'
import typescript from '../../Image/Skills/typescript.svg'
import react from '../../Image/Skills/react.svg'

function Skills(){
    return(
        <div className={styles.skill} id='skill'>
            <h1 id="skills">Habilidades</h1>
            <p>Conheça mais sobre minhas habilidades tecnicas</p>
            <div>
                <img src={javascript}/> 
                <img src={html}/> 
                <img src={css}/> 
                <img src={typescript}/> 
                <img src={react}/> 
            </div>
            
        </div>

    );
}

export default Skills