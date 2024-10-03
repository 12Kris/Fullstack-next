import styles from './Transform.module.css';

function Transform() {
    return (
        <article className={styles.infoSection} id="about">
            <section>
                <h2>
                    Transform your <br /> brand
                </h2>
                <p>
                    We are a full-service creative agency specializing brands grow fast.<br />
                    Engage your clients through compelling visuals that do most <br /> of the marketing for you.
                </p>
                <a href="/">Learn more</a>
            </section>
            <div className={styles.transformSectionImg} />
        </article>
    );
}

export default Transform;