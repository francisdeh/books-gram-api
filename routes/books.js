const express = require('express');
const router = express.Router();
const knex = require("../db/db")

/* GET books listing. */
router.get('/', async function(req, res) {
    try {
        let books = await knex("books")
        return res.status(200).json(books)
    } catch (err) {
        return res.status(500).json({"message": err.message})
    }
});

router.post('/', async function(req, res) {
    try {
        // title, description, author
        let book = await knex("books").insert(req.body, "*")
        return res.status(200).json(book)
    } catch (err) {
        return res.status(500).json({"message": err.message})
    }
});

router.patch('/:id', async function(req, res) {
    try {
        // title, description, author
        let book = await knex("books").where('id', req.params.id).update(req.body, ["*"])
        return res.status(200).json(book)
    } catch (err) {
        return res.status(500).json({"message": err.message})
    }
});

router.get('/:id', async function(req, res) {
    try {
        let book = await knex("books").where("id", req.params.id).first()
        if (!book) {
            return res.status(404).json({"message": "Book not found! 🙊"})
        }
        return res.status(200).json(book)
    } catch (err) {
        return res.status(500).json({"message": err.message})
    }
});

router.delete('/:id', async function(req, res) {
    try {
        let numOfRowAffected =  await knex("books").where("id", req.params.id).del()
        return res.status(200).json({"message": `${numOfRowAffected} book(s) trashed.`})
    } catch (err) {
        return res.status(500).json({"message": err.message})
    }
});

module.exports = router;
