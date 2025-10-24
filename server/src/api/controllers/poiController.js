// Get all POIs with optional filtering
const getAllPOIs = async (req, res) => {
  try {
    const { type, tags, minRating, search } = req.query;
    const { samplePOIs } = require('../../data/sampleData');
    
    let filteredPOIs = [...samplePOIs];

    // Filter by type
    if (type) {
      filteredPOIs = filteredPOIs.filter(poi => poi.type === type);
    }

    // Filter by tags
    if (tags) {
      const tagArray = tags.split(',');
      filteredPOIs = filteredPOIs.filter(poi => 
        poi.tags_vi.some(tag => tagArray.includes(tag))
      );
    }

    // Filter by minimum rating
    if (minRating) {
      filteredPOIs = filteredPOIs.filter(poi => poi.rating >= parseInt(minRating));
    }

    // Search in name and description
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPOIs = filteredPOIs.filter(poi => 
        poi.name_vi.toLowerCase().includes(searchLower) ||
        poi.description_vi.toLowerCase().includes(searchLower)
      );
    }

    // Sort by rating (descending)
    filteredPOIs.sort((a, b) => b.rating - a.rating);
    
    res.json({
      success: true,
      count: filteredPOIs.length,
      data: filteredPOIs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get POI by ID
const getPOIById = async (req, res) => {
  try {
    const { samplePOIs } = require('../../data/sampleData');
    const poi = samplePOIs.find(p => p.id === req.params.id);
    
    if (!poi) {
      return res.status(404).json({
        success: false,
        message: 'POI not found'
      });
    }

    res.json({
      success: true,
      data: poi
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get POIs by type
const getPOIsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const { samplePOIs } = require('../../data/sampleData');
    const pois = samplePOIs.filter(poi => poi.type === type);
    
    // Sort by rating (descending)
    pois.sort((a, b) => b.rating - a.rating);
    
    res.json({
      success: true,
      count: pois.length,
      data: pois
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new POI (read-only mode for demo)
const createPOI = async (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Create operation not supported in demo mode. Data is read-only.'
  });
};

// Update POI (read-only mode for demo)
const updatePOI = async (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Update operation not supported in demo mode. Data is read-only.'
  });
};

// Delete POI (read-only mode for demo)
const deletePOI = async (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Delete operation not supported in demo mode. Data is read-only.'
  });
};

module.exports = {
  getAllPOIs,
  getPOIById,
  getPOIsByType,
  createPOI,
  updatePOI,
  deletePOI
};
