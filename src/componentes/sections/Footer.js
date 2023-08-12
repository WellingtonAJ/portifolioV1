
import {FaLinkedin, FaGithub} from "react-icons/fa";
import styles from '../sections/Footer.module.css'; 

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
            <li><a href='https://www.linkedin.com/in/wellingtonadevfs/' target="_blank" rel="noopener"><FaLinkedin size={30}/></a></li> 
            <li><a href='https://github.com/WellingtonAJ' target="_blank" rel="noopener"><FaGithub size={30}/></a></li>
            </ul>
            <p>wellingtonassis.dev@gmail.com</p>
            <p> Wellington Assis 2023</p>
        </div>

    );
}

export default Footer