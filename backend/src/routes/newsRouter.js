import express from 'express'
import NewsController from '../controller/NewsController.js'

const newsRouter =express.Router()


const a= new NewsController()


newsRouter.get('/',a.index)
newsRouter.get('/show',a.show)


export default newsRouter