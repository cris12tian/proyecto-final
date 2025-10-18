const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  const token = auth.split(' ')[1];
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.userId = data.id;
    next();
  } catch (err) { res.status(401).json({ error: 'Invalid token' }); }
};
