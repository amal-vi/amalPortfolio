import React ,{useEffect,useState} from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import { IoFlashlightOutline } from "react-icons/io5";



function Navbar() {

  const [isDarkMode , setIsDarkMode]=useState(true);
  useEffect (()=>{
    document.body.className = isDarkMode? 'dark_theme' : 'light_theme';
  },[isDarkMode]);

  const handleToggle = ()=>{
    setIsDarkMode(prev=>!prev);
  }

  return (
    <nav className={styles.nav_container}>
      <Link to='/'><img src="/favicon.png"  className={styles.nav_head}/></Link>
      <ul className={styles.nav_ul}>
        <Link
          className={styles.nav_ul_items}
          to="https://www.instagram.com/_amal_vi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaInstagram />
          </li>
        </Link>
        <Link
          className={styles.nav_ul_items}
          to="https://github.com/amal-vi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FiGithub />
          </li>
        </Link>
        <Link
          className={styles.nav_ul_items}
          to="https://www.linkedin.com/in/contactamal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FiLinkedin />
          </li>
        </Link>
      </ul>
      <input type="checkbox" id="menu_burger" checked={isDarkMode}   onChange={() => {
    console.log('Toggling:', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  }}  className={styles.dark_mode} />
      <label htmlFor='menu_burger' className={styles.nav_dark_mode_icon}>
        <IoFlashlightOutline
  className={`${styles.nav_icon} ${isDarkMode ? styles.iconDark : styles.iconLight}`}
/>
      </label>
      </nav>

  );
}

export default Navbar;
