// Static initial data for artists, albums, and songs
export const artists = [
  { id: 1, name: "Pendulum" },
  { id: 2, name: "Tom Odell" },
  { id: 3, name: "Green Day" },
  { id: 4, name: "Red Hot Chili Peppers" },
  { id: 5, name: "Ed Sheeran" },
  { id: 6, name: "Bruno Mars" },
  { id: 7, name: "Ado" },
  { id: 8, name: "U2" },
];

export const albums = [
  { id: 1, name: "American Idiot", artistId: 3 },
  { id: 2, name: "Stadium Arcadium", artistId: 4 },
  { id: 3, name: "X", artistId: 5 },
  { id: 4, name: "Doo-Wops & Hooligans", artistId: 6 },
  { id: 5, name: "Kyougen", artistId: 7 },
];

export const songs = [
  {
    id: 1,
    title: "Witchcraft",
    artistId: 1,
    artist: "Pendulum",
    albumId: null,
    album: "Unknown",
    info: "song name is Witchcraft created by Pendulum",
  },
  {
    id: 2,
    title: "Another Love",
    artistId: 2,
    artist: "Tom Odell",
    albumId: null,
    album: "Unknown",
    info: "song name is Another Love created by Tom Odell",
  },
  {
    id: 3,
    title: "Fairytale Gone Bad",
    artistId: null,
    artist: "Unknown",
    albumId: null,
    album: "Unknown",
    info: "song name is Fairytale Gone Bad created by Unknown",
  },
  {
    id: 4,
    title: "American Idiot",
    artistId: 3,
    artist: "Green Day",
    albumId: 1,
    album: "American Idiot",
    info: "American Idiot",
  },
  {
    id: 5,
    title: "Tell Me Baby",
    artistId: 4,
    artist: "Red Hot Chili Peppers",
    albumId: 2,
    album: "Stadium Arcadium",
    info: "Stadium Arcadium",
  },
  {
    id: 6,
    title: "One",
    artistId: 5,
    artist: "Ed Sheeran",
    albumId: 3,
    album: "X",
    info: "X",
  },
  {
    id: 7,
    title: "Talking To The Moon",
    artistId: 6,
    artist: "Bruno Mars",
    albumId: 4,
    album: "Doo-Wops & Hooligans",
    info: "Doo-Wops & Hooligans",
  },
  {
    id: 8,
    title: "Usseewa",
    artistId: 7,
    artist: "Ado",
    albumId: 5,
    album: "Kyougen",
    info: "Kyougen",
  },
  {
    id: 9,
    title: "Ordinary Love",
    artistId: 8,
    artist: "U2",
    albumId: null,
    album: "Unknown",
    info: "song name is Ordinary Love created by U2",
  },
  {
    id: 10,
    title: "The Reason",
    artistId: null,
    artist: "Unknown",
    albumId: null,
    album: "Unknown",
    info: "song name is The Reason created by Unknown",
  },
];

export function getArtists() {
  return artists;
}

export function getAlbums() {
  return albums;
}

export function getSongs() {
  return songs;
}