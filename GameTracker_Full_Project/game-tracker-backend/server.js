require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/gametracker');

app.use('/api/auth', require('./routes/auth'));
app.use('/api/games', require('./routes/games'));
app.use('/api/reviews', require('./routes/reviews'));

app.get('/', (req, res) => res.send('GameTracker API running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
