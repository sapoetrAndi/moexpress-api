module.exports = (app) => {
  const auth = require('../controllers/auth.controller')
  const router = require('express').Router()

  router.get('/login', auth.login)
  router.get('/logout', auth.logout)

  app.use('/api/auth', router)
}