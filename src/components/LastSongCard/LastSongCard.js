import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./LastSongCard.module.css";

// Component for adding a new song
export default function LastSongCard({ onAddSong }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    const title = formElements[0].value.trim();
    const artist = formElements[1].value.trim();
    const album = formElements[2].value.trim();
    const info = formElements[3].value.trim();
    if (title) {
      onAddSong({ title, artist, album, info });
      formElements[0].value = ""; // Clear title
      formElements[1].value = ""; // Clear artist
      formElements[2].value = ""; // Clear album
      formElements[3].value = ""; // Clear info
    } else {
      alert("Title is required!");
    }
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Add New Song</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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