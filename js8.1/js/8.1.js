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