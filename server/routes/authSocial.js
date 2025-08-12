const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// Serialize user into minimal payload for JWT
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Google
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, { id: profile.id, provider: 'google', profile });
  })
);

// Facebook
passport.use(new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID || '',
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'emails', 'name']
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, { id: profile.id, provider: 'facebook', profile });
  })
);

// Twitter (X)
passport.use(new TwitterStrategy(
  {
    consumerKey: process.env.TWITTER_CLIENT_ID || '',
    consumerSecret: process.env.TWITTER_CLIENT_SECRET || '',
    callbackURL: '/auth/twitter/callback',
    includeEmail: true
  },
  (token, tokenSecret, profile, done) => {
    return done(null, { id: profile.id, provider: 'twitter', profile });
  })
);

// LinkedIn
passport.use(new LinkedInStrategy(
  {
    clientID: process.env.LINKEDIN_CLIENT_ID || '',
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
    callbackURL: '/auth/linkedin/callback',
    scope: ['r_liteprofile', 'r_emailaddress']
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, { id: profile.id, provider: 'linkedin', profile });
  })
);

function sendToken(req, res) {
  const token = jwt.sign({ id: req.user.id, provider: req.user.provider }, JWT_SECRET, { expiresIn: '1h' });
  res.send(
    `<script>window.opener.postMessage({ token: '${token}' }, '*'); window.close();</script>`
  );
}

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user.id, provider: req.user.provider }, JWT_SECRET, { expiresIn: '1h' });
  const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
  res.redirect(`${clientUrl}/oauth?token=${token}`);
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), sendToken);

router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { session: false }), sendToken);

router.get('/auth/linkedin', passport.authenticate('linkedin'));
router.get('/auth/linkedin/callback', passport.authenticate('linkedin', { session: false }), sendToken);

module.exports = router;
