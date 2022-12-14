const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    try {
        const categoriesData = await Category.findAll();
        res.status(200).json(categoriesData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id);
        categoryData ? res.status(200).json(categoryData) : res.status(404).json({})
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newCategoryData = await Category.create(req.body);
        res.status(200).json(newCategoryData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updateCategoryData = await Category.update(req.body, { where: { id: req.params.id }})
        res.status(200).json(updateCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteCategoryData = await Category.destroy({ where: { id: req.params.id }})
        deleteCategoryData ? res.status(200).json(deleteCategoryData) : res.status(404).json(0)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
