import styles from "../../page.module.css";
import ArtistCard from "../../../components/ArtistCard/ArtistCard";

export default async function ArtistPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/songs`, {
    cache: 'no-store', // Disable caching for dynamic data
  });

  if (!res.ok) {
    return (
      <div className={styles.cardsContainer}>
        <div style={{ textAlign: 'center', color: '#fff' }}>Failed to load artists</div>
      </div>
    );
  }

  const data = await res.json();
  const artist = (data.artists || []).find((a) => a.id === parseInt(params.id, 10));

  if (!artist) {
    return (
      <div className={styles.cardsContainer}>
        <div style={{ textAlign: 'center', color: '#fff' }}>Artist not found</div>
      </div>
    );
  }

  return (
    <div className={styles.cardsContainer}>
      <ArtistCard artist={artist} songsList={data.songs || []} isVisible={true} />
    </div>
  );
}