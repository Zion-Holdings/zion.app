const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, trim: true, unique: true },
  passwordHash: { type: String, required: true, select: false },
});

// Ensure a unique index exists for the email field. This prevents duplicate
// accounts even if the collection was created before `unique: true` was added
// to the schema.
userSchema.index({ email: 1 }, { unique: true });

userSchema.methods.setPassword = async function(password) {
  this.passwordHash = await bcrypt.hash(password, 10);
};

module.exports = mongoose.model('User', userSchema);
