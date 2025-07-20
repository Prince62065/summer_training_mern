const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const cors = require("cors");
const recipeRoutes = require('./routes/recipe.routes');
const groceryRoutes = require('./routes/grocery.routes');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database connected");
}).catch(() => {
  console.log("Error connecting database");
});


app.use(cors());

app.use(express.json())
  .use('/auth', authRoutes)
  .use('/user',  userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

app.use('/recipes', recipeRoutes);
app.use('/grocery', groceryRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});