const express = require('express');
const router = express.Router();
const {
  getAllPOIs,
  getPOIById,
  getPOIsByType,
  createPOI,
  updatePOI,
  deletePOI
} = require('../controllers/poiController');

// GET /api/v1/pois - Get all POIs with optional filtering
router.get('/', getAllPOIs);

// GET /api/v1/pois/type/:type - Get POIs by type
router.get('/type/:type', getPOIsByType);

// GET /api/v1/pois/:id - Get POI by ID
router.get('/:id', getPOIById);

// POST /api/v1/pois - Create new POI
router.post('/', createPOI);

// PUT /api/v1/pois/:id - Update POI
router.put('/:id', updatePOI);

// DELETE /api/v1/pois/:id - Delete POI
router.delete('/:id', deletePOI);

module.exports = router;
