const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Item, User} = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Item.findAll({
    attributes: [
      'item_id',
      'name',
      'seller',
      'price',
      'description'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/:id', (req, res) => {
//   Post.findOne({
//     where: {
//       user_id: req.params.user_id
//     },
//     attributes: [
//       'item_id',
//       'name',
//       'seller',
//       'price',
//       'description'
//     ],
//     include: [
//       {
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post('/', withAuth, (req, res) => {
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

router.put('/:id', withAuth, (req, res) => {
  Item.update(
    {
      name: req.body.name
    },
    {
      where: {
        item_id: req.params.item_id
      }
    }
  )
    .then(dbPostData => {
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

module.exports = router;
