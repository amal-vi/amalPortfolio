import React from 'react'
import styles from '../pages/Skills.module.css'
import { FaGitAlt,FaBootstrap, FaDatabase,FaHtml5 ,FaCss3Alt,FaJsSquare ,FaPython} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";


function Skills() {
  return (
    <>
        <div className={styles.skills_container}>
            <h1 className={styles.skills_container_head}>Skills</h1>
            <div className={styles.skill_inner_container}>
                <div className={styles.skill_inner_container_items}>
                    <FaHtml5 />
                    <h3>HTML</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <FaCss3Alt />
                    <h3>CSS</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <FaJsSquare />
                    <h3>Javascript</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <RiReactjsLine />
                    <h3>React</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <FaPython />
                    <h3>Python</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <FaDatabase />
                    <h3>MySql</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <FaGitAlt />
                    <h3>Git</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <BsGithub />
                    <h3>Github</h3>
                </div>
                <div className={styles.skill_inner_container_items}>
                                        <FaBootstrap />
                    <h3>Bootstrap</h3>
                </div>

            </div>
        </div>
    </>
  )
}

export default Skills