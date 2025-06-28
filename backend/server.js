const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// ✅ Use Railway's dynamic PORT or default to 3700 locally
const PORT = process.env.PORT || 3700;

app.use(cors());

// ✅ Serve static files (adjust paths as per your folder structure)
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../Assets')));

// ✅ Serve index.html as root
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ App is running on Port: ${PORT}`);
});
