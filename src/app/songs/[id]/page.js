import styles from "./page.module.css";

// Song details page
export default async function SongPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/songs`, {
    cache: 'no-store', // Disable caching for dynamic data
  });

  if (!res.ok) {
    return <div className={styles.container}>Failed to load songs</div>;
  }

  const data = await res.json();
  const song = (data.songs || []).find((s) => s.id === parseInt(params.id, 10));

  if (!song) {
    return <div className={styles.container}>Song not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{song.title}</h1>
      <p className={styles.detail}>Artist: {song.artist}</p>
      <p className={styles.detail}>Album: {song.album}</p>
      <p className={styles.detail}>Info: {song.info}</p>
    </div>
  );
}