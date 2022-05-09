const db = require("../db/database");

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    // bookList.push({ title: this.title, author: this.author });
  }

  static async getBooks() {
    const dbRes = await db.execute("SELECT * FROM books");
    const [bookList, schema] = dbRes;
    return bookList;
  }
}

module.exports = Book;
