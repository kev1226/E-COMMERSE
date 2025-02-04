import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from "../controllers/category.controller.js";

const router = Router()

// obtener todo
router.get('/category',authRequired, getCategories)

// obtener una categoria
router.get('/category/:id',authRequired, getCategory)
// crear categorias
router.post('/category',authRequired, createCategory)

// eliminar categoria
router.delete('/category/:id',authRequired, deleteCategory)

// actualizar categoria
router.put('/category/:id',authRequired, updateCategory)


export default router