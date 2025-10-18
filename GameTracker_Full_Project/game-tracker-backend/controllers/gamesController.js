const Game = require('../models/Game');

exports.list = async (req, res) => {
  const { q, platform, sort } = req.query;
  const filter = {};
  if (q) filter.title = { $regex: q, $options: 'i' };
  if (platform) filter.platform = platform;
  try {
    const games = await Game.find(filter).sort(sort === 'hours' ? { hoursPlayed: -1 } : { createdAt: -1 });
    res.json(games);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.get = async (req, res) => {
  try { const game = await Game.findById(req.params.id); if (!game) return res.status(404).send('Not found'); res.json(game); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

exports.create = async (req, res) => {
  try { const created = await Game.create(req.body); res.status(201).json(created); }
  catch (err) { res.status(400).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try { const updated = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(updated); }
  catch (err) { res.status(400).json({ error: err.message }); }
};

exports.remove = async (req, res) => {
  try { await Game.findByIdAndDelete(req.params.id); res.status(204).send(); }
  catch (err) { res.status(500).json({ error: err.message }); }
};
