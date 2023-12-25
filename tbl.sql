SELECT * FROM bookstore.books;
INSERT INTO books (title, author, year, price) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 10.99),
('To Kill a Mockingbird', 'Harper Lee', 1960, 12.50),
('1984', 'George Orwell', 1949, 9.99),
('Pride and Prejudice', 'Jane Austen', 1813, 8.95),
('The Catcher in the Rye', 'J.D. Salinger', 1951, 11.25),
('The Hobbit', 'J.R.R. Tolkien', 1937, 14.99),
('Harry Potter and the Philosopher''s Stone', 'J.K. Rowling', 1997, 15.50);

ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'SanYok7Bor0';
FLUSH PRIVILEGES;
