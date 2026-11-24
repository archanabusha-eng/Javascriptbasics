 const shelf= ["Wings of Fire", "The Alchemist", "Let Us C"];
 console.log('Array:',shelf);

console.log("Array Length:", shelf.length);
console.log("First Element:", shelf[0]);
console.log("Last Element:", shelf[shelf.length - 1]);

shelf.push("Clean Code");
shelf.unshift("Godan");

console.log("After push and unshift:", shelf);
let removedLast = shelf.pop();
let removedFirst = shelf.shift();

console.log("Removed Last Item:", removedLast);
console.log("Removed First Item:", removedFirst);
console.log("After pop and shift:", shelf);

shelf.splice(1, 1, "Malgudi Days");

console.log("After splice:", shelf);

console.log("Index of Let Us C:", shelf.indexOf("Let Us C"));
console.log("Includes Godan:", shelf.includes("Godan"));
let firstTwo = shelf.slice(0, 2);

console.log("First Two Items:", firstTwo);
console.log("Original Shelf Unchanged:", shelf);
let sortedShelf = [...shelf].sort();

console.log("Sorted Copy:", sortedShelf);

console.log("Is shelf an array?", Array.isArray(shelf));
console.log("All Book Titles:");

shelf.forEach(function(title) {
    console.log(title);
});


const book = {
    id: 101,
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam",
    price: 350,
    copies: 4,

    publisher: {
        name: "Universities Press",
        city: "Hyderabad"
    },

    tags: ["biography", "science"],
    describe() {
        return `${this.title} by ${this.author}`;
    }
};
console.log("\n--- PART 2: OBJECTS ---");

console.log("Title:", book.title);
console.log("Author:", book["author"]);
console.log("Publisher City:", book.publisher.city);
console.log("Second Tag:", book.tags[1]);
console.log("Description:", book.describe());
book.price = 380;
book.isbn = "978-81-7371-146-6";

console.log("Updated Price:", book.price);
console.log("ISBN:", book.isbn);

delete book.isbn;
console.log("Has ISBN:", "isbn" in book);
console.log("Has Price:", "price" in book);
console.log("Object Keys:", Object.keys(book));
console.log("Publisher Values:", Object.values(book.publisher));
console.log("Publisher Entries:", Object.entries(book.publisher));
const { title, price } = book;

console.log("Destructured Title:", title);
console.log("Destructured Price:", price);
const bookCopy = { ...book, price: 400 };

console.log("Original Book Price:", book.price);
console.log("Copied Book Price:", bookCopy.price);
console.log("\n--- PART 3: FUNCTIONS ---");
const formatPrice = function(amount) {
    return "Rs " + amount;
};

console.log(formatPrice(350));
const calculateLateFee = function(daysLate, ratePerDay = 2) {
    return daysLate * ratePerDay;
};

console.log("Late Fee:", calculateLateFee(5));
console.log("Late Fee:", calculateLateFee(5, 3));
const createBook = function(id, title, author, category, price, copies, rating) {
    return {
        id,
        title,
        author,
        category,
        price,
        copies,
        rating
    };
};
const newBook = createBook(
    107,
    "Ikigai",
    "Hector Garcia",
    "Self-help",
    399,
    6,
    4.3
);
console.log("Created Book:", newBook);
const library = [
    createBook(101, "Wings of Fire", "A. P. J. Abdul Kalam", "Autobiography", 350, 4, 4.8),

    createBook(102, "The Alchemist", "Paulo Coelho", "Fiction", 299, 2, 4.5),

    createBook(103, "Let Us C", "Yashavant Kanetkar", "Programming", 450, 5, 4.2),

    createBook(104, "Clean Code", "Robert C. Martin", "Programming", 899, 0, 4.7),

    createBook(105, "Godan", "Munshi Premchand", "Fiction", 220, 3, 4.6),

    createBook(106, "Malgudi Days", "R. K. Narayan", "Fiction", 275, 1, 4.4)
];

console.log("\n--- PART 4: ARRAYS OF OBJECTS ---");
const allTitles = library.map(book => book.title);

console.log("All Titles:", allTitles);
const cheapBooks = library
    .filter(book => book.price < 300)
    .map(book => book.title);

console.log("Books Below Rs 300:", cheapBooks);
const foundBook = library.find(book => book.id === 104);

console.log("Book with ID 104:", foundBook.title);
const bookIndex = library.findIndex(book => book.id === 105);

console.log("Index of ID 105:", bookIndex);
const anyOutOfStock = library.some(book => book.copies === 0);

const allRatedAbove4 = library.every(book => book.rating > 4);

console.log("Any Book Out of Stock:", anyOutOfStock);
console.log("Every Book Rating Above 4:", allRatedAbove4);
const isAvailable = function(book) {
    return book.copies > 0;
};
const addBook = function(lib, newBook) {
    return [...lib, newBook];
};

const removeBook = function(lib, id) {
    return lib.filter(book => book.id !== id);
};

const borrowBook = function(lib, id) {
    const book = lib.find(book => book.id === id);

    if (book === undefined) {
        return "Book not found";
    }

    if (book.copies === 0) {
        return `Sorry, ${book.title} is out of stock`;
    }

    book.copies--;

    return `Borrowed: ${book.title} (${book.copies} copies left)`;
};
const searchByAuthor = function(lib, text) {
    return lib
        .filter(book =>
            book.author.toLowerCase().includes(text.toLowerCase())
        )
        .map(book => book.title);
};
const printReport = function(lib) {
    console.log("\n--- LIBRARY REPORT ---");
    console.log("ID - Title - Price - Copies - Status");

    lib.forEach(book => {
        const status = isAvailable(book) ? "In stock" : "Out of stock";

        console.log(
            `${book.id} - ${book.title} - ${formatPrice(book.price)} - ${book.copies} - ${status}`
        );
    });
};
console.log("\n--- PART 5: LIBRATRACK TEST ---");
console.log(borrowBook(library, 101));
console.log(borrowBook(library, 104));
console.log(borrowBook(library, 999));
const updated = addBook(
    library,
    createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3)
);

console.log("Original Library Length:", library.length);
console.log("Updated Library Length:", updated.length);
const trimmed = removeBook(updated, 102);

console.log("Trimmed Library Length:", trimmed.length);

console.log("Books by Kalam:", searchByAuthor(library, "kalam"));
printReport(trimmed);