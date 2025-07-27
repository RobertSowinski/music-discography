"use client";

import { useState, useEffect } from "react";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import styles from "./page.module.css";

export default function Artists() {
  const [artistsList, setArtistsList] = useState([]);
  const [songsList, setSongsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/songs")
      .then((res) => res.json())
      .then((data) => {
        setArtistsList(data.artists || []);
        setSongsList(data.songs || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    if (e.type === "click" || (e.type === "keypress" && e.key === "Enter")) {
      setSearchTerm(e.target.value || "");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredArtists = searchTerm
    ? artistsList.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : artistsList;

  return (
    <main className={styles.main}>
      <div className={styles.titleSearchContainer}>
        <div className={styles.titleWrapper}>
          <h1>Artist Discography</h1>
        </div>
        <div className={styles.searchWrapper}>
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              placeholder="Search Artist..."
              className={styles.searchInput}
              onKeyPress={handleSearch}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchButton} onClick={handleSearch}>
              <span className={styles.searchIcon}>🔍</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.cardsContainer}>
          {filteredArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              songsList={songsList}
              isVisible={filteredArtists.some((a) => a.id === artist.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}