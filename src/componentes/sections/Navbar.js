import styles from './Navbar.module.css'
import {FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
            <li><Nav.Link href='#apresentation'>Apresentação</Nav.Link></li>
            <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
            <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
            </ul>

            <ul>
            <li><a href='https://www.linkedin.com/in/wellingtonadevfs/' target="_blank" rel="noopener"><FaLinkedin size={30}/></a></li> 
            <li><a href='https://github.com/WellingtonAJ' target="_blank" rel="noopener"><FaGithub size={30}/></a></li>
            </ul>
        </div>

    );
}

export default Navbar