import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "./SongCard.module.css";

// Reusable component for displaying song details
export default function SongCard({ song }) {
  const isArtistUnknown = song.artist === "Unknown";
  const isAlbumUnknown = song.album === "Unknown";

  return (
    <div className={styles.card}>
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
            <button className={styles.showInfo} onClick={() => window.location.href = `/songs/${song.id}`}>
              Show Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}