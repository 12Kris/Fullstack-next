import logoIcon from "../../../public/green-logo.svg";
import facebook from "../../../public/icon-facebook.svg";
import instagram from "../../../public/icon-instagram.svg";
import twitter from "../../../public/icon-twitter.svg";
import pinterest from "../../../public/icon-pinterest.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <Image src={logoIcon} alt="Company Logo" className={styles.logo}/>
            </div>
            <nav className={styles.footerMenu}>
                <Link href="#about">About</Link>
                <Link href="#services">Services</Link>
                <Link href="#projects">Projects</Link>
            </nav>
            <div className={styles.socialMedia}>
                <a href="/" aria-label="Facebook">
                    <Image src={facebook} alt="Facebook logo" className={styles.socialIcon}/>
                </a>
                <a href="/" aria-label="Instagram">
                    <Image src={instagram} alt="Instagram logo" className={styles.socialIcon}/>
                </a>
                <a href="/" aria-label="Twitter">
                    <Image src={twitter} alt="Twitter logo" className={styles.socialIcon}/>
                </a>
                <a href="/" aria-label="Pinterest">
                    <Image src={pinterest} alt="Pinterest logo" className={styles.socialIcon}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
