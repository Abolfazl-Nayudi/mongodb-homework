const { Router } = require('express');
const {
  getAllUsers,
  getSignleUser,
  createUser,
  deleteUser,
} = require('../controllers/faculty.controller');

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getSignleUser);
router.delete('/:id', deleteUser);

module.exports = { router };
