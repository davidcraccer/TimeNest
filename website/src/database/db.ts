import sqlite3 from 'sqlite3';
import { resolve } from 'path';

const dbPath = resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);

// Create the 'users' table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT,
    role TEXT,
    university TEXT
  )
`);

// Wrap db.run in a Promise
const runAsync = (query: string, params: any[] = []): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export { db, runAsync };
