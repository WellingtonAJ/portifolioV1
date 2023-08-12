
import ButtonB from '../elements/ButtonB.js'
import styles from './Projects.module.css'
import Cards from '../elements/Cards.js'
import portifolioA from '../../Image/Projects/portifolioA.svg'
import portifolioB from '../../Image/Projects/portifolioB.svg'
import portifolioC from '../../Image/Projects/portifolioC.svg'
import portifolioD from '../../Image/Projects/portifolioD.svg'

function Projects(){
    return(
        <div className={styles.projects} id="projects">
            
            <h1>Meus Projetos</h1>
            
            <Cards 
            img={portifolioA}
            title='Landing Page'
            tech='HTML e CSS.'
            description='Desenvolvimento de uma Landing page para uma empresa de Arquitetura'
            repo='https://github.com/WellingtonAJ/DesafioLandingP-DNC'
            site='https://wondrous-raindrop-4bf433.netlify.app'
            />

            <Cards
            img={portifolioD}
            title='Desafio de LP da DNC'
            tech='HTML, CSS'
            description='Desenvolvimento de uma LandingPage sobre carreira'
            repo='https://github.com/WellingtonAJ/LandingPage'
            site='https://landingpagetester.netlify.app'
            />
            
            <Cards
             img={portifolioB}
             title='Projeto Lampada DNC'
             tech='HTML, CSS e Javascript'
             description='Desafio de desenvolvimento de uma Lampada funcional.'
             repo='https://github.com/WellingtonAJ/Desafio-da-Lampada'
             site='https://teal-madeleine-8d2e3e.netlify.app'
            />

            <Cards
            img={portifolioC}
            title='Desafio Tabuada'
            tech='HTML, CSS e Javascript'
            description='Desenvolvimento de uma interface com objetivo de calcular em multiplicações'
            repo='https://github.com/WellingtonAJ/Calculadora'
            site='https://calculadorawellton.netlify.app'
            />

            <ButtonB text='Acesse meu Portfolio' link='https://github.com/WellingtonAJ' />
        </div>

    );
}
export default Projects