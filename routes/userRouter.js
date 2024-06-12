import express from 'express';
const router = express.Router()

router.get('/', (req, res)=>{
res.send('Hello World desde Router')
})

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router