import express from 'express';
import { getPost, getPostBySearch, getPosts, createPost, updatePost, deletePost, likePost } from '../controller/post_controller.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/search', getPostBySearch);
router.get('/:id', getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likepost', auth, likePost);

export default router;