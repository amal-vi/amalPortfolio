import React ,{useEffect,useState} from 'react'
import styles from "../pages/Hero.module.css";
import { Link, Navigate } from 'react-router-dom';
import { FaHtml5 ,FaCss3Alt,FaJsSquare,FaReact } from "react-icons/fa";


function Hero() {
      const [isDarkMode , setIsDarkMode]=useState(true);
      useEffect (()=>{
        document.body.className = isDarkMode? 'dark_theme' : 'light_theme';
      },[isDarkMode]);
      
  return (
    <section className={styles.hero_section}>
    <div className={styles.hero_container}>
        <div className={styles.hero_container_introduction}>
            <h2 className={styles.intro_head_primary}>Hello</h2>
            <h1 className={styles.intro_head_secondary}>I'm Amal</h1>
            <span className={styles.role}>I'm a Frontend Dev</span>
            <p>Hello, I'm Amal , a aspiring frontend developer. I hold a diploma in computer engineering and am currently pursuing a B.Tech degree in computer science and engineering. My passion for coding and creating user-friendly interfaces drives my ambition to excel in the world of frontend development. Let's embark on this journey together!</p>
            <Link  to='mailto:amalgivi@gmail.com' className={`${styles.btn_contact} ${isDarkMode ? styles.contactDark : styles.contactLight}`}>Contact</Link>
        </div>
        <div className={styles.hero_container_image}>
            <div className={styles.image_outer_circle}>
                <div className={styles.image_inner_circle_large}>
                    <img src="/myimage.jpeg" className={styles.hero_image} alt="" />
                </div>
            </div>
                <div className={`${styles.image_inner_circle_small} ${styles.circle1}`}><FaHtml5 /></div>
                <div className={`${styles.image_inner_circle_small} ${styles.circle2}`}><FaCss3Alt /></div>
                <div className={`${styles.image_inner_circle_small} ${styles.circle3}`}><FaJsSquare /></div>
                <div className={`${styles.image_inner_circle_small} ${styles.circle4}`}><FaReact /></div>

        </div>
    </div>
    </section>
  )
}

export default Hero