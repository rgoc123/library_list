var mongoose = require('mongoose');

var Schema = mongoose.Shema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
  }
);

//virtuals
.virtual('name')
.get(function() {
  return this.family_name + ', ' + this.first_name;
});

.virtual('url')
.get(function() {
  return '/catalog/author/' + this._id;
});

module.exports = mongoose.model('Author', AuthorSchema);
