import express from 'express'
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, updateTour } from '../controllers/tourControllers.js'

import { verifyAdmin } from '../utils/verifyToken.js'

export const router = express.Router()

//new router
router.post('/',verifyAdmin,createTour)

//update new tour
router.put('/:id',verifyAdmin,updateTour)

//delete tour
router.delete('/:id',verifyAdmin,deleteTour)


//retrieve single tour
router.get('/:id',getSingleTour)

//get tours by search
router.get('/search/getFeaturedTours',getFeaturedTour)

router.get('/search/getTourBySearch',getTourBySearch)
// get all tours
router.get('/',getAllTour)




export default router;