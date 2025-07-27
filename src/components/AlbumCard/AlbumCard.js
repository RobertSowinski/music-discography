import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./AlbumCard.module.css";

export default function AlbumCard({ album, songsList, isVisible }) {
  const [showSongs, setShowSongs] = useState(false);
  const albumSongs = songsList.filter((song) => song.albumId === album.id);

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete ${album.name} and all its songs?`)) {
      try {
        const res = await fetch("/api/songs", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: album.id, isAlbum: true }),
        });
        if (res.ok) {
          window.location.reload(); // Refresh to update state
        } else {
          alert("Failed to delete album");
        }
      } catch (error) {
        console.error("Error deleting album:", error);
        alert("Error deleting album");
      }
    }
  };

  const handleShowSongs = () => {
    setShowSongs(!showSongs);
  };

  return (
    <div className={`${styles.card} ${!isVisible ? styles.hidden : ""}`}>
      <h3 className={styles.title}>{album.name}</h3>
      <div className={styles.flipContainer}>
        <div className={`${styles.flipInner} ${showSongs ? styles.flipped : ""}`}>
          <div className={styles.imageContainer}>
            <FontAwesomeIcon icon={faMusic} className={styles.image} />
          </div>
          {albumSongs.length > 0 && (
            <div className={styles.songListContainer}>
              <ul className={styles.songList}>
                {albumSongs.map((song) => (
                  <li key={song.id} className={styles.songItem}>
                    {song.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.buttonGroup}>
          <div className={styles.showInfoContainer}>
            <button className={styles.showInfo} onClick={handleShowSongs}>
              Show Songs
            </button>
          </div>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}