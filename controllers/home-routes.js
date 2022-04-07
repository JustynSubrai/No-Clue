const router = require('express').Router();
const sequelize = require('../config/connection');
const { Item, User} = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('=========happy shopping=============');
  Item.findAll({
    include: [
      {
          model: User,
          attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/homepage', (req, res) => {
  console.log('==========im logged in============');
  Item.findAll({
    include: [
      {
          model: User,
          attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  console.log('========please login========');
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

router.get('/post', (req, res) => {
  console.log('==========post route working============');
      if (req.session.loggedIn) {
        res.render('post');
        return;
      }
  });

module.exports = router;
