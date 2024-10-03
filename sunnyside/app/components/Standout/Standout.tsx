import React from 'react';
import styles from './Standout.module.css';

function Standout() {
    return (
        <article className={styles.infoSection}>
            <div className={styles.standoutSectionImg} />
            <section>
                <h2>
                    Stand out to the <br /> right audience
                </h2>
                <p>
                    Using a collaborative formula of designers, videographers <br /> and copywriters,
                    we’ll build and extend your brand in digital places.
                </p>
                <a href="/">Learn more</a>
            </section>
        </article>
    );
}

export default Standout;