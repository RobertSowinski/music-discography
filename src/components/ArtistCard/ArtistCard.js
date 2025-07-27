import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./ArtistCard.module.css";

export default function ArtistCard({ artist, songsList, isVisible }) {
  const [showSongs, setShowSongs] = useState(false);
  const artistSongs = songsList.filter((song) => song.artistId === artist.id);

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete ${artist.name} and all their songs?`)) {
      try {
        const res = await fetch("/api/songs", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: artist.id, isArtist: true }),
        });
        if (res.ok) {
          window.location.reload(); // Refresh to update state
        } else {
          alert("Failed to delete artist");
        }
      } catch (error) {
        console.error("Error deleting artist:", error);
        alert("Error deleting artist");
      }
    }
  };

  const handleShowSongs = () => {
    setShowSongs(!showSongs);
  };

  return (
    <div className={`${styles.card} ${!isVisible ? styles.hidden : ""}`}>
      <h3 className={styles.title}>{artist.name}</h3>
      <div className={styles.flipContainer}>
        <div className={`${styles.flipInner} ${showSongs ? styles.flipped : ""}`}>
          <div className={styles.imageContainer}>
            <FontAwesomeIcon icon={faMusic} className={styles.image} />
          </div>
          {artistSongs.length > 0 && (
            <div className={styles.songListContainer}>
              <ul className={styles.songList}>
                {artistSongs.map((song) => (
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