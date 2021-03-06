import express from "express";
import { protect } from '../middleware/authMiddleware.js'
import Multer from 'multer'

const router = express.Router()

import { 
  chooseTheme,
    createLink, 
    deleteLink, 
    editLink, 
    uploadTheme, 
    userLinks
  } 
from "../controllers/linkController.js";


const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 10 * 1024 * 1024, // no larger than 10MB
    },
});


router.patch('/:username/delete', deleteLink)
router.patch('/:username/theme', multer.single("file"), uploadTheme)
router.post('/new', protect, createLink)
router.get('/all', protect, userLinks)
router.patch('/:username/choose', chooseTheme)
router.patch('/:username/editlink', editLink)




export default router
