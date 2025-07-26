// Static database for music discography
const musicDatabase = {
  artists: [
    { id: 1, name: "The Beatles", genre: "Rock" },
    { id: 2, name: "Beyoncé", genre: "Pop" },
    { id: 3, name: "Miles Davis", genre: "Jazz" },
  ],
  albums: [
    { id: 1, artistId: 1, title: "Abbey Road", year: 1969 },
    { id: 2, artistId: 1, title: "Sgt. Pepper's Lonely Hearts Club Band", year: 1967 },
    { id: 3, artistId: 2, title: "Lemonade", year: 2016 },
    { id: 4, artistId: 3, title: "Kind of Blue", year: 1959 },
  ],
  tracks: [
    { id: 1, albumId: 1, title: "Come Together", duration: "4:19" },
    { id: 2, albumId: 1, title: "Something", duration: "3:02" },
    { id: 3, albumId: 3, title: "Formation", duration: "3:26" },
    { id: 4, albumId: 4, title: "So What", duration: "9:22" },
  ],
};

// Functions to retrieve data
export const getArtists = () => musicDatabase.artists;
export const getAlbumsByArtistId = (artistId) =>
  musicDatabase.albums.filter((album) => album.artistId === parseInt(artistId));
export const getTracksByAlbumId = (albumId) =>
  musicDatabase.tracks.filter((track) => track.albumId === parseInt(albumId));