const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .post(contacts.create)
router.route("/find")
    .get(contacts.findAll)
router.route("/findOne/:id")
    .get(contacts.findOne)
router.route("/findFavorite")
    .get(contacts.findAllFavorite)
router.route("/delete/:id")
    .delete(contacts.delete)
router.route("/deleteAll")
    .delete(contacts.deleteAll)
router.route("/update/:id")
    .put(contacts.update)

module.exports = router;