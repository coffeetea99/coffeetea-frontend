import * as sqlite3 from 'sqlite3';

class Database {
  sqlite = new sqlite3.Database('sqlite.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });
}

const database = new Database();
export default database;
