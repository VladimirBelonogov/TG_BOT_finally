import  sqlite3  from "sqlite3";

const db = new sqlite3.Database('./users.db');

db.run(`ALTER TABLE users ADD COLUMN current_count INT`, (err) => {

    if (err) {
        console.error(err.message);
    } else {
        console.log('column add');
    }
});

// Закрываем подключение к базе данных
db.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Close the database connection.');
    }
});