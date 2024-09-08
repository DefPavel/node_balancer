const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (_req, res) => {
	res.send(`App running on port ${PORT}`)
})

app.listen(PORT, () => {
	console.info(`Server running on port ${PORT}`)
})
