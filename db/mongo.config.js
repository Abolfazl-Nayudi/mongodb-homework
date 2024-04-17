const mongoose = require('mongoose');

const db = async (uri) => {
  await mongoose.connect(uri);
};

module.exports = { db };
