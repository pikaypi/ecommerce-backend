const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
    try {
        const tagsData = await Tag.findAll({ include: { model: Product }});
        res.status(200).json(tagsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, { include: { model: Product }});
    tagData ? res.status(200).json(tagData) : res.status(404).json({})
} catch (err) {
    res.status(500).json(err);
}
});

router.post('/', async (req, res) => {
  try {
    const newTagData = await Tag.create(req.body);
    res.status(200).json(newTagData);
} catch (err) {
    res.status(500).json(err);
}
});

router.put('/:id', async (req, res) => {
  try {
    const updateTagData = await Tag.update(req.body, { where: { id: req.params.id }});
    res.status(200).json(updateTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
