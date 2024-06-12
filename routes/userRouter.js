import express from 'express';
import { home, about, contact, loginForm, registerForm, dashboard, addUser } from '../controllers/userController.js';
const router = express.Router()

router.get('/', home)
router.get('/about', about)
router.get('/contact', contact)
router.get('/login', loginForm)
router.get('/register', registerForm)
router.get('/dashboard', dashboard)
router.post('/register', addUser)

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router