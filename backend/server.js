const express = require('express');
const cors = require('cors');
const db = require('./db');
const routes = require('./routes'); // Import the routes module
const app = express();

app.use(cors());
app.use(express.json());

// Use the routes
app.use('/api', routes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
