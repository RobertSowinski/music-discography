"use client";

import { useState, useEffect } from "react";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import styles from "./page.module.css";

export default function Albums() {
  const [albumsList, setAlbumsList] = useState([]);
  const [songsList, setSongsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/songs")
      .then((res) => res.json())
      .then((data) => {
        setAlbumsList(data.albums || []);
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

  const filteredAlbums = searchTerm
    ? albumsList.filter((album) =>
        album.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : albumsList;

  return (
    <main className={styles.main}>
      <div className={styles.titleSearchContainer}>
        <div className={styles.titleWrapper}>
          <h1>Album Discography</h1>
        </div>
        <div className={styles.searchWrapper}>
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              placeholder="Search Album..."
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
          {filteredAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              songsList={songsList}
              isVisible={filteredAlbums.some((a) => a.id === album.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}