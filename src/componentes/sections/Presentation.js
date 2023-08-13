import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import Nav from 'react-bootstrap/Nav'
import {useEffect, useState} from 'react'

function Presentation (){
    const [text, setText] = useState('');
    const toRotate = ['Wellington Assis!', 'Desenvolvedor Mobile'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(250);

    useEffect(()=>{
        let ticker = setInterval (()=>{
            toType()
        }, delta)

        return()=> {clearInterval(ticker)}
    
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setisDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setisDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }

        
    }

    return(
        <div className={styles.presentation} id='Presentation'>
            
            <h1>Olá, eu sou {text}</h1>
            
            <h4><strong>Seja Bem vindo! ao o meu Portifólio!</strong></h4>
            
            <p>
                Sou um profissional responsável e dedicado, atuei e acumulei conhecimento por 4 anos na área de saúde e cirurgia estética, <br/>
                conhecimentos esses que moldaram um profissional que possui muita organização, olhar analítico, ágil e dinâmico na solução de problemas. <br/>
                E hoje busco uma transição no mercado de trabalho para novos ramos de atuação.
            </p>

        
        </div>
    )
}

export default Presentation