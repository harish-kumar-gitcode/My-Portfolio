const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3700;

// Resolve correct paths based on backend/server.js location
const publicPath = path.resolve(__dirname, '../public');
const assetsPath = path.resolve(__dirname, '../Assets');

app.use(cors());
app.use(express.static(publicPath));
app.use('/assets', express.static(assetsPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ App is running on Port: ${PORT}`);
});
