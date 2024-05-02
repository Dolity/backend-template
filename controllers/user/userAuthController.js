const userAuthValidate = require("../../helpers/joi/userAuthValidate.js")
const db = require("../../models")

module.exports = {
  status: (req, res) => {
    res.status(200).json({
      message: "User Auth Controller is working!",
    })
  },
  list: (req, res) => {},
  store: async (req, res) => {
    const { value, error } = userAuthValidate.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: "Input validation error",
      })
    }

    const { email, password } = value
    try {
      const user = await db.User.create({ email, password })
      return res.status(201).json({
        message: "User created successfully",
        data: user,
      })
    } catch (error) {
      return res.status(500).json({ message: `${error.message}` })
    }
  },
}
