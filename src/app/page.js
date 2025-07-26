import { getArtists } from "../lib/data";
import ArtistList from "../components/ArtistList/ArtistList";

// Homepage displaying list of artists
export default function Home() {
  const artists = getArtists();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1>Music Discography</h1>
      <ArtistList artists={artists} />
    </div>
  );
}