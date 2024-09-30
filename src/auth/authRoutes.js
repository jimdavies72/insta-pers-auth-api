const { Router } = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { login } = require('./authControllers');
const authRouter = Router();


authRouter.get('/login', login)
authRouter.get("/login/federated/google", passport.authenticate("google"));

module.exports = authRouter;