const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// GET all Employees
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// GET An Employee
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

// DELETE An Employee
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'user Deleted' });
        } else {
            console.log(err);
        }
    });
});

// INSERT An user
router.post('/', (req, res) => {
    const { id, name, salary } = req.body;
    console.log(id, name, email, type);
    const query = `
    SET @id = ?;
    SET @name = ?;
    SET @email = ?;
    SET @type = ?;
    CALL usersAddOrEdit(@id, @name, @email, @type);
  `;
    mysqlConnection.query(query, [id, name, email, type], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'user Saved' });
        } else {
            console.log(err);
        }
    });

});

router.put('/:id', (req, res) => {
    const { name, email, type } = req.body;
    const { id } = req.params;
    const query = `
    SET @id = ?;
    SET @name = ?;
    SET @email = ?;
    SET @type = ?;
    CALL usersAddOrEdit(@id, @name, @email, @type);
  `;
    mysqlConnection.query(query, [id, name, email, type], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'user Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;