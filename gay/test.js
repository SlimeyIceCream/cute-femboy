const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can use any port number you prefer

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the root path ('/')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'silly.html'));
});

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});