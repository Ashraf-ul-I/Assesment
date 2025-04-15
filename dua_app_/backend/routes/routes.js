import express from 'express';
import {
  getAllCategories,
  getSubcategoriesByCategory,
  getDuasBySubcategory
} from '../controllers/duaController.js';

const router = express.Router();

router.get('/categories', getAllCategories);
router.get('/subcategories', getSubcategoriesByCategory);
router.get('/duas', getDuasBySubcategory);

export default router;
