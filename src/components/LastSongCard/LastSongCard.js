import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./LastSongCard.module.css";

// Component for adding a new song
export default function LastSongCard() {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Add New Song</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Title" className={styles.input} required />
        <input type="text" placeholder="Artist" className={styles.input} />
        <input type="text" placeholder="Album" className={styles.input} />
        <input type="text" placeholder="Info" className={styles.input} />
        <button type="submit" className={styles.button}>
          <FontAwesomeIcon icon={faPlus} className={styles.icon} />
        </button>
      </form>
    </div>
  );
}