"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./SongCard.module.css";

// Reusable component for displaying song details
export default function SongCard({ song, isVisible }) {
  const isArtistUnknown = song.artist === "Unknown";
  const isAlbumUnknown = song.album === "Unknown";

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this song?")) {
      try {
        const res = await fetch("/api/songs", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: song.id }),
        });
        if (res.ok) {
          // Optionally update state instead of reload (requires parent callback)
          window.location.reload(); // Temporary until state management is added
        } else {
          alert("Failed to delete song");
        }
      } catch (error) {
        console.error("Error deleting song:", error);
        alert("Error deleting song");
      }
    }
  };

  return (
    <div className={`${styles.card} ${!isVisible ? styles.hidden : ""}`}>
      <h3 className={styles.title}>{song.title}</h3>
      <div className={styles.imageContainer}>
        <FontAwesomeIcon icon={faMusic} className={styles.image} />
      </div>
      <div className={styles.links}>
        <div className={styles.buttonGroup}>
          <div className={styles.linkGroup}>
            <div className={styles.flexItem}>
              <Link
                href={isArtistUnknown ? "#" : `/artists/${song.artistId}`}
                className={`${styles.link} ${isArtistUnknown ? styles.disabled : styles.active}`}
              >
                Artist
              </Link>
            </div>
            <div className={styles.flexItem}>
              <Link
                href={isAlbumUnknown ? "#" : `/albums/${song.albumId}`}
                className={`${styles.link} ${isAlbumUnknown ? styles.disabled : styles.active}`}
              >
                Album
              </Link>
            </div>
          </div>
          <div className={styles.showInfoContainer}>
            <Link href={`/songs/${song.id}`} className={styles.showInfo}>
              Show Info
            </Link>
          </div>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}