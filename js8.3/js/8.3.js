const book1 = {
    namee: "hyo",
    author: "hoar",
    year: "2002",
}
const book2 = {
    namee: "ashton",
    author: "Hadar",
    year: "2005",
}
const bookUtils = {
    getFirstPublished: function () {
        let first = book1
        let second = book2
        return (first.year < second.year) ? book1 : book2
    },
    setNewEdition(book, edition) {
        book.latestEdition = edition;

    },
    setLanguage(book, language) {
        book.languahe = language
    },
    setTranslation(book, language, translator) {
        book.translation = {
            translator: translator,
            language: language
        }

    },
    setPublisher(book, name, location) {
        book.publisher = {
            name: name,
            location: location
        }
    },
    function(book1, book2) {
        return (book1.publisher.name === book2.publisher.name) && (book1.publisher.location === book2.publisher.location);
    }
}



console.log(bookUtils.getFirstPublished());
bookUtils.setNewEdition(book1, 2004);
console.log(book1.latestEdition);
bookUtils.setLanguage(book2, "english")
console.log(book2.languahe);
console.log(book2);
bookUtils.setTranslation(book1, "jonana", "afira")
console.log(book1.translation);
bookUtils.setPublisher(book1, "hoka", "telaviv")
console.log(book1.publisher);
