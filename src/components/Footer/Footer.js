import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

// Footer component with copyright and contact info
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.copyright}>&copy; 2025 Robert Sowinski. All rights reserved.</p>
        </div>
        <div className={styles.right}>
          <div className={styles.contact}>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              Email: robsow3@wp.pl
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              Phone: +48 887 861 627
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}