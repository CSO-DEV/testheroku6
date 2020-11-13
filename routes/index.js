/**
 *Controller import
 */
const posts = require("../controllers/posts");

/**
 * Routes
 */
//GET all posts

router.get("/posts", posts.getPosts);


module.exports = router;
