const { Router } = require("express");
const router = Router();

const { createUrl, getUrls, addUrl, redirectUrl, findToken} = require('../controllers/url-controllers');

router.route('/').get(getUrls)
                .post(addUrl);

router.route('/:id').get(redirectUrl);

router.route('/token/:token').get(findToken);

module.exports = router;
