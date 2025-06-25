import React from 'react'
import styles from "../pages/Hero.module.css";
import { FaHtml5 ,FaCss3Alt,FaJsSquare,FaReact } from "react-icons/fa";



function Hero() {
  return (
    <div className={styles.hero_container}>
        <div className={styles.hero_container_introduction}>
            <h2 className={styles.intro_head_primary}>Hello</h2>
            <h1 className={styles.intro_head_secondary}>I'm Amal</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque rerum harum et esse, voluptates magnam quibusdam porro deserunt quia. Officiis perspiciatis quod at non ipsa modi odio voluptate officia quasi.</p>
            <button className={styles.btn_contact}>Contact</button>
        </div>
        <div className={styles.hero_container_image}>
            <div className={styles.image_outer_circle}>
                <div className={styles.image_inner_circle_large}></div>
            </div>
                <div className={`${styles.image_inner_circle_small} ${styles.circle1}`}><FaHtml5 />
</div>
                <div className={`${styles.image_inner_circle_small} ${styles.circle2}`}><FaCss3Alt />
</div>
                <div className={`${styles.image_inner_circle_small} ${styles.circle3}`}><FaJsSquare />
</div>
                <div className={`${styles.image_inner_circle_small} ${styles.circle4}`}><FaReact /></div>
            <img src="/Subject 2.png" className={styles.hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero