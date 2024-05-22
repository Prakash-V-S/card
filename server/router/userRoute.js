

import express from 'express'
import { getUser, createUser, updateUser, deleteUser } from '../controller/userController.js'

const router = express.Router()

router.get('/allUsers', getUser)
router.post('/create', createUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router 