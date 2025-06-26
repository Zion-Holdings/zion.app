const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, trim: true, unique: true },
  passwordHash: { type: String, required: true, select: false },
  active: { type: Boolean, default: true },
  stripeCustomerId: {
    type: String,
    // unique: true, // Stripe Customer IDs should be unique if present
    // sparse: true, // Allows multiple documents to have a null value for this field if not all users are Stripe customers
    index: true,
    // Consider making this unique and sparse if you enforce that a Stripe customer ID can only be associated with one user
  },
  // For quick access to current subscription status, denormalized from Subscription model
  planStatus: {
    type: String,
    enum: [null, 'active', 'canceled', 'incomplete', 'past_due', 'trialing', 'unpaid'], // Mirrored from Subscription model
    default: null,
  },
  // For quick access to the primary/current subscription ID
  stripeSubscriptionId: {
    type: String,
    index: true,
  },
  createdAt: { // Standard practice to have createdAt and updatedAt
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update `updatedAt` field before saving
userSchema.pre('save', function(next) {
  if (this.isModified()) { // only update if something changed
    this.updatedAt = Date.now();
  }
  next();
});

userSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updatedAt: Date.now() });
  next();
});


// Ensure a unique index exists for the email field. This prevents duplicate
// accounts even if the collection was created before `unique: true` was added
// to the schema.
userSchema.index({ email: 1 }, { unique: true });

userSchema.methods.setPassword = async function(password) {
  this.passwordHash = await bcrypt.hash(password, 10);
};

module.exports = mongoose.model('User', userSchema);
