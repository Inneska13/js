// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')

const test2 = require('./test2')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)

router.use('/', test2)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
