import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

// Header component with links and Font Awesome music icon
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerIcon}>
        <Link href="/">
          <FontAwesomeIcon icon={faMusic} className={styles.icon} />
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/artists">Artists</Link>
        <Link href="/albums">Albums</Link>
      </div>
    </header>
  );
}