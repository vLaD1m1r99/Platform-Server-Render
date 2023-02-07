import express from 'express';
import { signIn, signUp, getUsers } from '../controllers/user.js';
import auth from '../middleware/auth.js';
const router = express.Router();

//localhost:5000/
router.get('/getUsers', getUsers);
router.post('/signIn', signIn);
router.post('/signUp', signUp);
export default router;
