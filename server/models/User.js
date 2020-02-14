const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchama = new Schema({
   googleId: String
});

mongoose.model('users', userSchama );