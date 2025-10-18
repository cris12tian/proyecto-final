const Review = require('../models/Review');

exports.list = async (req, res) => {
  const { gameId } = req.query;
  const filter = {};
  if (gameId) filter.game = gameId;
  try { const reviews = await Review.find(filter).populate('game'); res.json(reviews); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try { const newR = await Review.create(req.body); res.status(201).json(await newR.populate('game')); }
  catch (err) { res.status(400).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try { const updated = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('game'); res.json(updated); }
  catch (err) { res.status(400).json({ error: err.message }); }
};

exports.remove = async (req, res) => {
  try { await Review.findByIdAndDelete(req.params.id); res.status(204).send(); }
  catch (err) { res.status(500).json({ error: err.message }); }
};
