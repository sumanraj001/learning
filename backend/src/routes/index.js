import express from 'express'
import newsRouter from './newsRouter.js'



const router=express.Router()
router.use('/news',newsRouter)

export default router

