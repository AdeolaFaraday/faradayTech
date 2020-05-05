const Category = require("../model/category")

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: 'Category does not exist'
            })
        }
        req.category = category
        next()
    })
}

exports.create = (req, res) => {
  const category = new Category(req.body)
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({err})
    } else {
      res.json({data})
    }
  })
}

exports.read = (req, res) => {
  Category.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({err})
    } else {
      return  res.json(data)
    }
  })
}

exports.remove = (req, res) => {
  const category = req.category
  category.remove((err, data) => {
      if (err) {
          return res.status(400).json({err})
      }
      res.json({
          message: 'Category deleted'
      })
  })
}
