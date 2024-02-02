import  sqlite3  from "sqlite3";

export const db = new sqlite3.Database('./users.db')
export const createUser = (telegram_id) => {
    const sql = `INSERT INTO users (telegram_id, is_subscriber, letter) VALUES (?, ?, ?)`;
    let is_subscriber = false;
    let letter= '';

    db.run(sql, [telegram_id, is_subscriber, letter], function(err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        }
    })
}

export const checkUser = (telegram_id, callback) => {
    const sql = `SELECT id FROM users WHERE telegram_id = ?`;

    db.get(sql, [telegram_id], (err, row) => {
        if (err) {
            console.error(err.message);
            callback(err, null);
        } else {
            if (row) {
                console.log('User found:', row.id);
                callback(null, true,row);
            } else {
                console.log('User not found');
                callback(null, false,row);
            }
        }
    });
}

export const getAllUsers = (callback) => {
    const sql = `SELECT * FROM users`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

export const updateLetter = (telegram_id, letter,current_count) => {
    const sql = `UPDATE users SET current_count = ?, letter = ?, last_letter_send = ? WHERE telegram_id = ?`;
    const poslednyaLetterSend = new Date();

    db.run(sql, [1, letter, poslednyaLetterSend, telegram_id], function(err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(`Row(s) updated: ${this.change}`);
        }
    });
}

export const updateLetterPlusCount = (telegram_id, letter,current_count) => {
    const sql = `UPDATE users SET current_count = ?, letter = ?, last_letter_send = ? WHERE telegram_id = ?`;
    const poslednyaLetterSend = new Date();
    db.run(sql, [current_count, letter, poslednyaLetterSend, telegram_id], function(err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(`Row(s) updated: ${this.change}`);
        }
    });
}

export const updateUser = (telegram_id, is_subscriber, letter) => {
    const sql = `UPDATE users SET is_subscriber = ?, letter = ? WHERE telegram_id = ?`;

    db.run(sql, [is_subscriber, letter, telegram_id], function(err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(`Row(s) updated: ${this.change}`);
        }
    });
}