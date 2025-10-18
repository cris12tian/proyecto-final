require('dotenv').config();
const connectDB = require('../config/db');
const Game = require('../models/Game');
const Review = require('../models/Review');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

(async () => {
  await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/gametracker');
  await Review.deleteMany({});
  await Game.deleteMany({});
  await User.deleteMany({});

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash('password', salt);
  const admin = await User.create({ name: 'Admin', email: 'admin@example.com', passwordHash: hash });

  const g1 = await Game.create({ title: 'The Witcher 3', platform: 'PC', cover: '', hoursPlayed: 120, completed: true, rating: 5 });
  const g2 = await Game.create({ title: 'Hollow Knight', platform: 'Switch', cover: '', hoursPlayed: 60, completed: true, rating: 5 });
  const g3 = await Game.create({ title: 'Stardew Valley', platform: 'PC', cover: '', hoursPlayed: 30, completed: false, rating: 4 });

  await Review.create({ game: g1._id, author: 'Juan', content: 'Obra maestra, historia excelente', stars: 5 });
  await Review.create({ game: g2._id, author: 'Maria', content: 'Gran jugabilidad', stars: 5 });
  await Review.create({ game: g3._id, author: 'Carlos', content: 'Relax y diversión', stars: 4 });

  console.log('Seed completo. Usuario admin@example.com / password');
  process.exit(0);
})();
