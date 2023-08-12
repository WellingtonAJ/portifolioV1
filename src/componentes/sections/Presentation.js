import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation (){
    return(
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Seja Bem vindo! este é o meu Portifólio!</strong></h4>

            <h1>Ola eu sou Wellington Assis</h1>

            <p>
                Sou um profissional responsável e dedicado, atuei e acumulei conhecimento por 4 anos na área de saúde e cirurgia estética, <br/>
                conhecimentos esses que moldaram um profissional que possui muita organização, olhar analítico, ágil e dinâmico na solução de problemas. <br/>
                E hoje busco uma transição no mercado de trabalho para novos ramos de atuação.
            </p>

            <ButtonA text='Conecte-se Comigo!'/>
            

        </div>
    )
}

export default Presentation