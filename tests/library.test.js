const assert = require("assert");

const {
    addBook,
    searchBooks,
    borrowBook,
    returnBook,
    listAvailableBooks
} = require("../src/library");

console.log("Running Library Automation Tests...");

const addedBook = addBook({
    title: "Clean Code",
    author: "Robert C. Martin"
});

assert.strictEqual(addedBook.title, "Clean Code");
console.log("PASS: Add book");

assert.ok(searchBooks("Alchemist").length > 0);
console.log("PASS: Search book");

borrowBook(1);
assert.strictEqual(
    listAvailableBooks().some(book => book.id === 1),
    false
);
console.log("PASS: Borrow book");

returnBook(1);
assert.strictEqual(
    listAvailableBooks().some(book => book.id === 1),
    true
);
console.log("PASS: Return book");

assert.throws(() => borrowBook(999), /Book not found/);
console.log("PASS: Invalid book handling");

console.log("All tests passed successfully!");
