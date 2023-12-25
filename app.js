const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Підключення до бази даних
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SanYok7Bor0',
  database: 'bookstore',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

// Налаштування шаблонізатора EJS
app.set('view engine', 'ejs');

// Використання middleware для обробки JSON та форм
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Реалізація маршруту виведення книг
app.get('/', (req, res) => {
  connection.query('SELECT * FROM books', (err, results) => {
    if (err) throw err;
    res.render('index', { books: results });
  });
});

// Додамо маршрут для сторінки додавання книги
app.get('/add', (req, res) => {
    res.render('add');
});
  
// Додамо маршрут для обробки додавання книги
app.post('/add', (req, res) => {
    const { title, author, year, price } = req.body;
    const sql = 'INSERT INTO books (title, author, year, price) VALUES (?, ?, ?, ?)';
  
    connection.query(sql, [title, author, year, price], (err, results) => {
      if (err) throw err;
      res.redirect('/');
    });
});
  

// Додамо маршрут для видалення книги
app.get('/delete/:id', (req, res) => {
    const bookId = req.params.id;
    const sql = 'DELETE FROM books WHERE id = ?';
  
    connection.query(sql, [bookId], (err, results) => {
      if (err) throw err;
      res.redirect('/');
    });
});


// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});