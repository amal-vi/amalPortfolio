
import styles from '../pages/EducationSection.module.css'
import { GiMedal } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import React ,{useEffect,useState} from 'react'

function EducationSection() {
        const [isDarkMode , setIsDarkMode]=useState(true);
        useEffect (()=>{
          document.body.className = isDarkMode? 'dark_theme' : 'light_theme';
        },[isDarkMode]);
        
  return (
<section className={styles.education_section}>
    <h1>Education</h1>
    <div className={styles.education_container}>
             <div className={`${styles.education_details_container} ${isDarkMode ? styles.borderDark : styles.borderLight}`}>
            <h2 className={styles.course_name}><span><GiMedal/></span>B.Tech in  Computer Science & Engineering</h2>
            <h3 className={styles.college_name}><span><FaSchool/></span>Toc H Institute Of Science & Technology<span className={styles.year}>[Present]</span></h3>
            <h5 className={styles.address}>Cochin,Kerala,India</h5>
        </div>

        <div  className={`${styles.education_details_container} ${isDarkMode ? styles.borderDark : styles.borderLight}`}>
            <h2 className={styles.course_name}><span><GiMedal/></span>Diploma in Computer Engineering</h2>
            <h3 className={styles.college_name}><span><FaSchool/></span>Jdt Polytechnic College<span className={styles.year}>[2020-2023]</span></h3>
            <h5 className={styles.address}>Calicut,Kerala,India</h5>
        </div>


    </div>
</section>
  )
}

export default EducationSection