import styles from "../../page.module.css";
import AlbumCard from "../../../components/AlbumCard/AlbumCard";

export default async function AlbumPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/songs`, {
    cache: 'no-store', // Disable caching for dynamic data
  });

  if (!res.ok) {
    return (
      <div className={styles.cardsContainer}>
        <div style={{ textAlign: 'center', color: '#fff' }}>Failed to load albums</div>
      </div>
    );
  }

  const data = await res.json();
  const album = (data.albums || []).find((a) => a.id === parseInt(params.id, 10));

  if (!album) {
    return (
      <div className={styles.cardsContainer}>
        <div style={{ textAlign: 'center', color: '#fff' }}>Album not found</div>
      </div>
    );
  }

  return (
    <div className={styles.cardsContainer}>
      <AlbumCard album={album} songsList={data.songs || []} isVisible={true} />
    </div>
  );
}