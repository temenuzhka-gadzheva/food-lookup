const express = require('express');
const cors    = require('cors');
const app     = express();
const port    = 3001;

app.use(cors());
app.use(express.json());

// define routes
const foodRoutes     = require('./src/routes/foodRoutes');

// use routes
app.use(foodRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));