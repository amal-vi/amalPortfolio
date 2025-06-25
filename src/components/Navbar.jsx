import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "../components/Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <h2 className={styles.nav_head}>Amal</h2>
      <ul className={styles.nav_ul}>
        <Link
          className={styles.nav_ul_items}
          to="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaInstagram />
          </li>
        </Link>
        <Link
          className={styles.nav_ul_items}
          to="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FiGithub />
          </li>
        </Link>
        <Link
          className={styles.nav_ul_items}
          to="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FiLinkedin />
          </li>
        </Link>
      </ul>
      <input type="checkbox" id="menu_burger" className={styles.menu_burger} />
      <label htmlFor="menu_burger" className={styles.nav_setting_icon}>
        <FiSettings />
      </label>
      <div className={styles.nav_setting}>
        <span className={styles.dark_mode_toggle}>Dark Mode</span>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={`${styles.slider} ${ styles.round}`}></span>
        </label>
      </div>
      </nav>

  );
}

export default Navbar;
