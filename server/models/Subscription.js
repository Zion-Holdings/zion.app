const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  stripeCustomerId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  stripeSubscriptionId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  stripePriceId: {
    type: String,
    required: true,
  },
  stripeProductId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'trialing', 'unpaid'],
    default: 'incomplete',
  },
  currentPeriodStart: { // Added for more complete subscription tracking
    type: Date,
    required: true,
  },
  currentPeriodEnd: {
    type: Date,
    required: true,
  },
  cancelAtPeriodEnd: { // Tracks if a subscription is set to cancel at period end
    type: Boolean,
    default: false,
  },
  canceledAt: { // When the subscription was actually canceled
    type: Date,
  },
  endedAt: { // When the subscription ultimately ended
    type: Date,
  },
  trialStart: {
    type: Date,
  },
  trialEnd: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update `updatedAt` field before saving
subscriptionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

subscriptionSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});


subscriptionSchema.index({ userId: 1 });

module.exports = mongoose.models.Subscription || mongoose.model('Subscription', subscriptionSchema);
