import Link from "next/link";
import { Panel } from "rsuite";
import { getArtists, getSongs } from "../../lib/data";
import styles from "./ArtistList.module.css";

// Component to display a list of artists with associated songs
export default function ArtistList() {
  const artists = getArtists();
  const songs = getSongs();

  // Filter artists who have at least one song
  const artistsWithSongs = artists.filter((artist) =>
    songs.some((song) => song.artistId === artist.id)
  );

  return (
    <div className={styles.container}>
      {artistsWithSongs.map((artist) => (
        <Link href={`/artists/${artist.id}`} key={artist.id} className={styles.link}>
          <Panel bordered className={styles.panel}>
            <h3>{artist.name}</h3>
          </Panel>
        </Link>
      ))}
    </div>
  );
}