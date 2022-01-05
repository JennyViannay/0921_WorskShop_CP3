const playlistKeys = ["id", "user_id", "title"];
const playlistTracksKey = ["playlist_id", "track_id"];

const playlistToCreate = {
  user_id: 1,
  title: "Paris c'est Gotham",
};

const trackToAddOnPlaylist = {
  playlist_id: 1,
  track_id: 1,
};

module.exports = {
  playlistKeys,
  playlistTracksKey,
  playlistToCreate,
  trackToAddOnPlaylist,
};
