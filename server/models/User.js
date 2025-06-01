const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true, select: false },
});

const SALT_ROUNDS = 10;

userSchema.methods.setPassword = async function(password) {
  this.passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
};

module.exports = mongoose.model('User', userSchema);
