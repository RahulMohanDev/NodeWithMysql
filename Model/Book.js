const db = require("../db/database");

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  async add() {
    await db.execute(`INSERT INTO books (name, author) VALUES (?,?)`, [
      this.title,
      this.author
    ]);
  }

  static async getBooks() {
    const dbRes = await db.execute("SELECT * FROM books");
    const [bookList, schema] = dbRes;
    return bookList;
  }
}

module.exports = Book;
