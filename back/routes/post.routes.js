const router = require('express').Router();
const postController = require('../controllers/post.controller');
//const multer = require("../middleware/multer-config");

router.get('/', postController.readPost);
router.post('/', postController.createPost);//multer
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unLikePost);

// comments
router.patch('/comment-post/:id', postController.commentPost);
router.patch('/edit-comment-post/:id', postController.editCommentPost);
router.patch('/delete-comment-post/:id', postController.deleteCommentPost);

module.exports = router;