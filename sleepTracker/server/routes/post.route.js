const express = require('express');
const PostCtrl = require('../controllers/post.controller');
const router = express.Router();
router.post('/', PostCtrl.create);
router.get('/:id', PostCtrl.get)
router.get('/', PostCtrl.list)
router.put('/:id', PostCtrl.update)
router.delete('/:id', PostCtrl.delete)
module.exports = router;