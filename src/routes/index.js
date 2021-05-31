const express = require('express');
const {Controller} = require('../controller');

// Global Variables
const router = express.Router();

router.route('/data/:repository')
    .put(Controller.uploadObject);

router.route('/data/:repository/:objectId')
    .get(Controller.downloadObject);

router.route('/data/:repository/:objectId')
    .delete(Controller.deleteObject);

router.all('*', (req, res) => {
  res.status(404).json({error: 'Route not found'});
});

module.exports = router;
