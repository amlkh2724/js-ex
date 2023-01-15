// Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
// ‘The book <book name> was written by <author name> in
// the year <publishing year>’

const books = {
    name: "hiken",
    pages: 200,
    author: "cong",
    pyear: "2002",
}

function bookD(book) {
    return `The book ${book.name} was written by ${book.author} in the year ${book.pyear}`;
}


console.log(bookD(books));