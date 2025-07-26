"use client";

import { getSongs } from "../lib/data";
import SongCard from "../components/SongCard/SongCard";
import LastSongCard from "../components/LastSongCard/LastSongCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";

// Homepage displaying songs
export default function Home() {
  const songs = getSongs();

  const handleSearchClick = (e) => {
    e.preventDefault();
    // Placeholder for search action (to be implemented)
    console.log("Search button clicked");
  };

  return (
    <main className={styles.main}>
      <div className={styles.titleSearchContainer}>
        <div className={styles.titleWrapper}>
          <h1>Music Discography</h1>
        </div>
        <div className={styles.searchWrapper}>
          <div className={styles.searchInputContainer}>
            <input type="text" placeholder="Search songs..." className={styles.searchInput} />
            <button type="button" className={styles.searchButton} onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.cardsContainer}>
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
          <LastSongCard />
        </div>
      </div>
    </main>
  );
}