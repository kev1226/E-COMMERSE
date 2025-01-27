// Para crear un enrutador
import { Router } from "express";
import { login,register } from "../controllers/auth.controller.js";
// Objeto para crear multiples rutas (peticiosnes get, post...)

const router = Router()

router.post('/register', register)
router.post('/login', login)

export default router