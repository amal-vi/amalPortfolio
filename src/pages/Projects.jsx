import React from 'react'
import styles from '../pages/Projects.module.css'

function Projects() {
  return (
    <section className={styles.projects_section}>
        <h1>Projects</h1>
        <h2 className={styles.comingSoon}>
          Coming soon
          <span className={styles.blink}>
            <span>.</span><span>.</span><span>.</span>
          </span>
        </h2>
    </section>
  )
}

export default Projects