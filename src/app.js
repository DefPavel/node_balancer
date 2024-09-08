require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

/**
 * Вычисляет число Фибоначчи для заданной позиции.
 * @param {number} n - Позиция числа Фибоначчи (неотрицательное целое число).
 * @returns {number|string} - Число Фибоначчи на позиции n или сообщение об ошибке, если входные данные некорректны.
 */
function fibonacci(n) {
	if (n < 0) return 'Input should be a non-negative integer'
	if (n === 0) return 0
	if (n === 1) return 1

	let a = 0,
		b = 1,
		next
	for (let i = 2; i <= n; i++) {
		next = a + b
		a = b
		b = next
	}
	return b
}

/**
 * Маршрут для вычисления числа Фибоначчи по позиции.
 * @route GET /fibonacci/:n
 * @param {Request} req - HTTP запрос с параметром n (позиция числа Фибоначчи).
 * @param {Response} res - HTTP ответ с результатом вычисления числа Фибоначчи.
 */
app.get('/fibonacci/:n', (req, res) => {
	const n = parseInt(req.params.n)

	if (isNaN(n) || n < 0) {
		return res
			.status(400)
			.send(
				'Please provide a valid non-negative integer for Fibonacci sequence.'
			)
	}
	res.send(`Fibonacci number at position ${n} is ${fibonacci(n)}`)
})

/**
 * Маршрут для главной страницы.
 * @route GET /
 * @param {Request} _req - HTTP запрос.
 * @param {Response} res - HTTP ответ с сообщением о работе приложения.
 */
app.get('/', (_req, res) => {
	res.send(`App running on port ${PORT}`)
})

/**
 * Запуск сервера на указанном порту.
 * @param {number} PORT - Порт, на котором запускается сервер.
 */
app.listen(PORT, () => {
	console.info(`Server running on port ${PORT}`)
})
