const playlistKeys = ["id", "user_id", "title"];
const playlistTracksKey = [
  "playlist_id",
  "playlist_title",
  "track_id",
  "track_title",
];

const playlistToCreate = {
  user_id: 1,
  title: "Paris c'est Gotham",
};

module.exports = {
  playlistKeys,
  playlistTracksKey,
  playlistToCreate
};
