
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import { IoFlashlightOutline } from "react-icons/io5";



function Navbar() {


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
      <input type="checkbox" id="menu_burger"  className={styles.dark_mode} />
      <label htmlFor="dark_mode" className={styles.nav_dark_mode_icon}>
        <IoFlashlightOutline />
      </label>
      </nav>

  );
}

export default Navbar;
