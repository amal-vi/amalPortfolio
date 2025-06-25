import React from 'react'
import styles from '../pages/Skills.module.css'
import { FaGitAlt,FaBootstrap, FaDatabase,FaHtml5 ,FaCss3Alt,FaJsSquare ,FaPython} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";


function Skills() {
  return (
    <section className={styles.skills_section}>
            <h1>Skills</h1>
        <div className={styles.skills_container}>
            <div className={styles.skill_inner_container}>
                <div className={styles.skill_inner_container_items}>
                    <img src="/html.svg" alt="" />
                    <h3>HTML</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <img src="/css.svg" alt="" />
                    <h3>CSS</h3>
                </div>
                 <div className={styles.skill_inner_container_items}>
                                        <img src="/bootstrap.svg" alt="" />
                    <h3>Bootstrap</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <img src="/js.svg" alt="" />
                    <h3>Javascript</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <img src="/react.svg" alt="" />
                    <h3>React</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <img src="/figma.svg" alt="" />
                    <h3>Figma</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <img src="/git.svg" alt="" />
                    <h3>Git</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <img src="/github.svg" alt="" />
                    <h3>Github</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <img src="/python.svg" alt="" />
                    <h3>Python</h3>
                </div>
                <div className={`${styles.skill_inner_container_items} ${styles.mysql}`}>
                                        <img src="/mysql.svg"  alt="" />
                    <h3>MySql</h3>
                </div>
                
               
            </div>
        </div>
    </section>
  )
}

export default Skills