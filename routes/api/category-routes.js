const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all route
router.get('/', (req, res) => {
  Category.findAll({include: [Product]}).then(categoryData => res.json(categoryData)).catch(error => res.json(error)); 
});
// find one route
router.get('/:id', (req, res) => {
  Category.findOne({where: {id: req.params.id}, include: [Product]}).then(categoryData => res.json(categoryData)).catch(error => res.json(error));
});
//Create route
router.post('/', (req, res) => {
  Category.create(req.body).then(categoryData => res.json(categoryData)).catch(error => res.json(error));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: {id: req.params.id}}).then(categoryData => res.json(categoryData)).catch(error => res.json(error));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: req.params.id}}).then(categoryData => res.json(categoryData)).catch(error => res.json(error)); 
});

module.exports = router;
