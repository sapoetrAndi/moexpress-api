const db = require('../models')
const Account = db.accounts

exports.registration = (req, res) => {
  

  const account = new Account({
    username: req.body.username,
    password: req.body.password
  })

  account.save(account)
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(409).send({
      message: err.message || "Some error while create account."
    })
  })
}

exports.login = (req, res) => {
  

  const query  = Account.where({ username: req.body.username, password: req.body.password });
  
  query.findOne(function (err, Account) {
    
    if (err) return handleError(err);
    if (Account) {
      //generate jwt
      res.status(200).send({
        message: "success",
        data : Account
      })
    }else{
      res.status(404).send({
        message: "Username or password is incorrect!"
      })
    }
  });
}

exports.logout = (req, res) => {
  res.json({
    message : `Logout API endpoint`
  })
}