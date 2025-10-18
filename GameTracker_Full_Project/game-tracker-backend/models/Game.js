const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: { type: String, required: true },
  platform: { type: String, default: 'PC' },
  cover: { type: String },
  hoursPlayed: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', GameSchema);
