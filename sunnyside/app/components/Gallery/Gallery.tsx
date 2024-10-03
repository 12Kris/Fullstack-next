import styles from './Gallery.module.css';

function Gallery() {
    return (
        <article className={styles.gallery} id="projects">
            <div className={styles.milk}></div>
            <div className={styles.orange}></div>
            <div className={styles.cone}></div>
            <div className={styles.sugar}></div>
        </article>
    );
}

export default Gallery;