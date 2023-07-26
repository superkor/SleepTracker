const express = require('express');
const postRoutes = require('./post.route');
const router = express.Router();

router.get('/', (req, res) => {
    res. send('API WORKS');
});
router.use('/posts', postRoutes);
module.exports = router;