const express = require("express")
const router = require("./routers/user/user.js")
const logger = require("./helpers/logger/logger.js")

const app = express()
const port = 8080

app.use(express.json())

app.use("/api/v1/user", router)
app.listen(port, () => {
  try {
    logger.info(`Server is running on port ${port}`)
  } catch (error) {
    logger.error(`Server failed to start with error: ${error.message}`)
    process.exit(1)
  }
})
