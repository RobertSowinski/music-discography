import Link from "next/link";
import { Panel } from "rsuite";
import styles from "./ArtistList.module.css";

// Reusable component for listing artists
export default function ArtistList({ artists }) {
  return (
    <div className={styles.container}>
      {artists.map((artist) => (
        <Panel
          key={artist.id}
          shaded
          bordered
          style={{ width: "300px", padding: "10px" }}
        >
          <h3>{artist.name}</h3>
          <p>Genre: {artist.genre}</p>
          <Link href={`/artists/${artist.id}`}>View Details</Link>
        </Panel>
      ))}
    </div>
  );
}