"use client";

import logoIcon from '../../../public/logo.svg';
import burgerIcon from '../../../public/icon-hamburger.svg';
import closeButton from '../../../public/icon-close.svg';
import arrowDown from '../../../public/icon-arrow-down.svg';
import styles from './Header.module.css';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

function Header() {
    const [opened, setOpened] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Image className={styles.logo} src={logoIcon} alt="logo" />
                <div className={styles.navLinks}>
                    <Link href="#about">About</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#projects">Projects</Link>
                    <button className={styles.contact}>Contact</button>
                </div>

                <div
                    id="burger-menu"
                    className={styles.burgerIcon}
                    onClick={() => setOpened(!opened)}
                >
                    <Image
                        src={opened ? closeButton : burgerIcon}
                        alt="burger-menu-icon"
                        className={styles.closeIcon}
                    />
                </div>
                <div className={opened ? `${styles.navLinksMobile} ${styles.opened}` : styles.navLinksMobile}>
                    <Image
                        src={closeButton}
                        alt="close menu"
                        className={styles.closeIcon}
                        onClick={() => setOpened(!opened)}
                    />
                    <Link href="#about">About</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#projects">Projects</Link>
                    <button className={styles.contactBtn}>Contact</button>
                </div>
            </nav>
            <h1 className={styles.heading}>We are creative!</h1>
            <Image
                src={arrowDown}
                className={`${styles.arrowImg} ${isVisible ? styles.visible : ""}`}
                alt="arrow down"
            />
        </header>
    );
}

export default Header;
