import { getSongs } from "../../../lib/data";
import styles from "./page.module.css";

// Song details page
export default function SongPage({ params }) {
  const song = getSongs().find((s) => s.id === parseInt(params.id));

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