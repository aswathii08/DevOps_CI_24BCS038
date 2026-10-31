let books = [
    { id: 1, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", available: true },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", available: true },
    { id: 3, title: "Atomic Habits", author: "James Clear", available: true }
];

function addBook(book) {
    if (!book.title || !book.author) {
        throw new Error("Book title and author are required");
    }

    const newBook = {
        id: books.length ? Math.max(...books.map(b => b.id)) + 1 : 1,
        title: book.title,
        author: book.author,
        available: true
    };

    books.push(newBook);
    return newBook;
}

function searchBooks(keyword) {
    return books.filter(book =>
        book.title.toLowerCase().includes(keyword.toLowerCase()) ||
        book.author.toLowerCase().includes(keyword.toLowerCase())
    );
}

function borrowBook(id) {
    const book = books.find(b => b.id === id);

    if (!book) throw new Error("Book not found");
    if (!book.available) throw new Error("Book is already borrowed");

    book.available = false;
    return book;
}

function returnBook(id) {
    const book = books.find(b => b.id === id);

    if (!book) throw new Error("Book not found");
    if (book.available) throw new Error("Book is already available");

    book.available = true;
    return book;
}

function listAvailableBooks() {
    return books.filter(book => book.available);
}

module.exports = {
    addBook,
    searchBooks,
    borrowBook,
    returnBook,
    listAvailableBooks
};
