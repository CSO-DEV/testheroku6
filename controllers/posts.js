/**
 * controllers/posts.js - posts controller
 */

/**
 * Model import
 */
const Post = require("../models/Posts");


/**
 * Module import
 */


/**
 * Post controller
 */
const posts = {
  /* Get all postS*/

    getPosts: (req, res) => {
    /*Post.find({}, (error, data) => {
      if (error) {
        res.status(500).json({
          success: false,
          message: "An error has occured during get post",
        });
        return;
      }
      res.json({
        posts: data,
      });
    });*/
    Post.find({}, (err, result) =>{
      if (err) {
        res.send(err);
      } else {
        res.json({
          posts: result,
        });
      }
    });
  }
}
module.exports = posts;