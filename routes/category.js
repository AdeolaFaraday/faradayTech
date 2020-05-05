const express = require("express")
const router = express.Router()

const {create, read, remove, categoryById} = require("../controller/category")

router.get('/category/read', read)
router.post("/category", create)
router.delete("/category/delete/:categoryId", remove)

router.param('categoryId', categoryById)

module.exports = router
