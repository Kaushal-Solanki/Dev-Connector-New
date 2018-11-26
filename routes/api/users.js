const express = require('express')
const router = express.Router();


// @route Get api/users/test
// @desc  Tests users route
// @access Public

router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route Get api/users/register
// @desc  Register route
// @access Public
router.post('/register', (req, res) => {
  URLSearchParams.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email is already exit" })
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        })
      }
    })
})

module.exports = router;