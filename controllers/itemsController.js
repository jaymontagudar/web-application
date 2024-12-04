const itemModel = require('../models/item');

module.exports = {
    getAllItems(req, res) {
        itemModel.getAllItems((err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.render('index', { items: rows });
        });
    },
    createItem(req, res) {
        const { name, description } = req.body;
        if (!name) {
            res.status(400).send('Name is required');
            return;
        }
        itemModel.createItem(name, description, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.redirect('/items');
        });
    },
};
