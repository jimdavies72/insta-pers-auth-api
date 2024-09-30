
exports.login = (req, res, next) => {
  try {
    res.render('login')
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}