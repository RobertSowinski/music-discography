"use client";

import { useState, useEffect } from "react";
import SongCard from "../components/SongCard/SongCard";
import LastSongCard from "../components/LastSongCard/LastSongCard";
import styles from "./page.module.css";

export default function Home() {
  const [songsList, setSongsList] = useState([]);
  const [artistsList, setArtistsList] = useState([]);
  const [albumsList, setAlbumsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/songs")
      .then((res) => res.json())
      .then((data) => {
        setSongsList(data.songs || []);
        setArtistsList(data.artists || []);
        setAlbumsList(data.albums || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      });
  }, []);

  const handleAddSong = async (formData) => {
    const { title, artist, album, info } = formData;
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }

    try {
      const res = await fetch("/api/songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, artist, album, info }),
      });
      const newSong = await res.json();
      if (res.ok) {
        setSongsList((prev) => [...prev, newSong]);
        // Refresh all data to sync artists and albums
        fetch("/api/songs")
          .then((res) => res.json())
          .then((data) => {
            setArtistsList(data.artists || []);
            setAlbumsList(data.albums || []);
          });
      } else {
        alert("Failed to add song");
      }
    } catch (error) {
      console.error("Error adding song:", error);
      alert("Error adding song");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.titleSearchContainer}>
        <div className={styles.titleWrapper}>
          <h1>Music Discography</h1>
        </div>
        <div className={styles.searchWrapper}>
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              placeholder="Search songs..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <span className={styles.searchIcon}>🔍</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.cardsContainer}>
          {songsList.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
          <LastSongCard onAddSong={handleAddSong} />
        </div>
      </div>
    </main>
  );
}