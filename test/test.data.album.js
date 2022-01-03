const albumKeys = ['id', 'author_id', 'gender_id', 'title', 'created_at'];

const albumToCreate = {
  title: 'Flipp',
  gender_id: 1,
  author_id: 1,
  created_at: "2021-11-30 00:00:00"
};

module.exports = {
  albumKeys,
  albumToCreate,
};