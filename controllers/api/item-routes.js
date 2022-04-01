const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Item, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('==========HELLO============');
  Item.findAll({

    // include: [
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:name', (req, res) => {
  Item.findAll({
    where: {
      name: req.params.name
    },
    include: {
      model: User,
      attributes: ['username']
    }

  })
    .then(dbPostData => {
      console.log(dbPostData);
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  console.log('---------Post Working--------')
  Item.create({
    name: req.body.name,
    item_id: req.body.item_id,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
