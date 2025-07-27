import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "public", "db.json");
let db = {};

const loadDB = () => {
  if (fs.existsSync(dbPath)) {
    const data = fs.readFileSync(dbPath, "utf8");
    db = JSON.parse(data);
  } else {
    db = { songs: [], artists: [], albums: [] };
  }
};

const saveDB = () => {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
};

loadDB();

export async function GET() {
  return NextResponse.json(db);
}

export async function POST(req) {
  const { title, artist, album, info } = await req.json();

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  let artistId = null;
  let albumId = null;
  let newArtist = artist || "Unknown";
  let newAlbum = album || "Unknown";

  if (newArtist !== "Unknown") {
    const existingArtist = db.artists.find(a => a.name === newArtist);
    if (existingArtist) {
      artistId = existingArtist.id;
    } else {
      artistId = db.artists.length > 0 ? Math.max(...db.artists.map(a => a.id)) + 1 : 1;
      db.artists.push({ id: artistId, name: newArtist });
    }
  }

  if (newAlbum !== "Unknown") {
    const existingAlbum = db.albums.find(a => a.name === newAlbum);
    if (existingAlbum) {
      albumId = existingAlbum.id;
    } else {
      albumId = db.albums.length > 0 ? Math.max(...db.albums.map(a => a.id)) + 1 : 1;
      db.albums.push({ id: albumId, name: newAlbum, artistId: artistId || null });
    }
  }

  const newSong = {
    id: Date.now(),
    title,
    artistId,
    artist: newArtist,
    albumId,
    album: newAlbum,
    info: info || "",
  };
  db.songs.push(newSong);
  saveDB();

  return NextResponse.json(newSong, { status: 201 });
}

export async function DELETE(req) {
  const { id, isArtist } = await req.json();
  if (isArtist) {
    const artist = db.artists.find(a => a.id === id);
    if (!artist) {
      return NextResponse.json({ error: "Artist not found" }, { status: 404 });
    }
    // Delete all songs by this artist
    db.songs = db.songs.filter(s => s.artistId !== id);
    // Delete the artist
    db.artists = db.artists.filter(a => a.id !== id);
    // Check and delete albums with no remaining songs
    db.albums = db.albums.filter(album => {
      const albumSongs = db.songs.filter(s => s.albumId === album.id);
      return albumSongs.length > 0;
    });
  } else {
    const songToDelete = db.songs.find(s => s.id === id);
    if (!songToDelete) {
      return NextResponse.json({ error: "Song not found" }, { status: 404 });
    }
    db.songs = db.songs.filter(s => s.id !== id);
    const artistSongs = db.songs.filter(s => s.artistId === songToDelete.artistId);
    if (artistSongs.length === 0 && songToDelete.artistId) {
      db.artists = db.artists.filter(a => a.id !== songToDelete.artistId);
    }
    const albumSongs = db.songs.filter(s => s.albumId === songToDelete.albumId);
    if (albumSongs.length === 0 && songToDelete.albumId) {
      db.albums = db.albums.filter(a => a.id !== songToDelete.albumId);
    }
  }
  saveDB();
  return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}