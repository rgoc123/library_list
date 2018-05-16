var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, enum: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Romance'], min: 3, max: 100},
  }
);

module.exports = mongoose.model('Genre', GenreSchema);
