const express = require('express');

const router = express.Router();

const {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getAllUsers, 
    getUserByEmail,
    updateUserPassword,
  } = require('../controllers/users');

  router.route('/')
  .get(getAllUsers)
  .post(createUser)
  .patch(updateUserPassword) 

  router.route('/:id')
  .get(getUser)
  .put(updateUser) 
  .delete(deleteUser);

  router.route('/email/:email')
  .get(getUserByEmail);


  module.exports = router;