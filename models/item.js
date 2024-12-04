const db = require('./db'); // Ensure this imports the database connection correctly

function getAllItems(callback) {
    db.all('SELECT * FROM items', (err, rows) => {
        callback(err, rows);
    });
}

function createItem(name, description, callback) {
    const stmt = db.prepare('INSERT INTO items (name, description) VALUES (?, ?)');
    stmt.run(name, description, function (err) {
        callback(err);
    });
}

module.exports = {
    getAllItems,
    createItem,
};
