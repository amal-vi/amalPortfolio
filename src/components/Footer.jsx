import React from 'react'
import styles from '../components/Footer.module.css'
import { Link } from 'react-router-dom';
import { BsInstagram,BsWhatsapp,BsTwitterX } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.connectSection}>

        <Link className={styles.icons} to="https://wa.me/" target="_blank" rel="noopener noreferrer">
          < BsWhatsapp/>
        </Link>
                       <Link className={styles.icons} to="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FiGithub/>
        </Link>
        <Link className={styles.icons} to="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <SlSocialLinkedin/>
        </Link>
 


      </div>
      <h3>Coded with ❤️ by 
        <Link to="https://www.instagram.com/_amal_vi/" className={styles.owner}> _amal_vi</Link>
      </h3>
    </footer>
  )
}

export default Footer