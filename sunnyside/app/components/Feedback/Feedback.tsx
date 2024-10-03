import EmilyPhoto from "../../../public/image-emily.jpg";
import ThomasPhoto from "../../../public/image-thomas.jpg";
import JenniePhoto from "../../../public/image-jennie.jpg";
import Image from "next/image";
import styles from "./Feedback.module.css";

function Feedback() {
    return (
        <article className={styles.testimonials} id="services">
            <h3>Client feedback's</h3>
            <section className={styles.profiles}>
                <div className={styles.profile}>
                    <Image src={EmilyPhoto} alt="Emily R." className={styles.profileImage} />
                    <p className={styles.feedback}>
                        Incredible end result! Our sales increased over we
                        worked great with Sunnyside. Highly recommended!
                    </p>
                    <div className={styles.authorBlock}>
                        <p className={styles.profileAuthor}>Emily R.</p>
                        <p className={styles.authorJob}>Marketing Director</p>
                    </div>
                </div>

                <div className={styles.profile}>
                    <Image src={ThomasPhoto} alt="Thomas S." className={styles.profileImage} />
                    <p className={styles.feedback}>
                        Sunnyside&apos;s enthusiasm coupled with their keen interest
                        in our success made it a satisfying and enjoyable experience.
                    </p>
                    <div className={styles.authorBlock}>
                        <p className={styles.profileAuthor}>Thomas S.</p>
                        <p className={styles.authorJob}>Chief Operating Officer</p>
                    </div>
                </div>

                <div className={styles.profile}>
                    <Image src={JenniePhoto} alt="Jennie F." className={styles.profileImage} />
                    <p className={styles.feedback}>
                        Incredible end result! Our sales increased over we
                        worked great with Sunnyside. Highly recommended!
                    </p>
                    <div className={styles.authorBlock}>
                        <p className={styles.profileAuthor}>Jennie F.</p>
                        <p className={styles.authorJob}>Business Owner</p>
                    </div>
                </div>
            </section>
        </article>
    );
}

export default Feedback;