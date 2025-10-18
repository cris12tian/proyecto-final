const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  game: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
  author: { type: String, default: 'Anónimo' },
  content: { type: String, required: true },
  stars: { type: Number, min: 0, max: 5, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', ReviewSchema);
