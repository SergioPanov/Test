// const firstName = "loh";
// const secondName = "yopt";
// const fullName = firstName + secondName;
// const welcomeMsg = `Some guest ${firstName} welcome you are ${secondName}`;
// console.log(fullName);

// const brand = "FDSFASD";
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// let brand = "SamSung";
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);
// console.log(0 && 5 && 6);
// console.log(4 || 5 || 6);
// const stars = 8;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   default:
//     console.log("No sentence");
// }
// console.log(price);

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// let cost;
// const subscription = 'free';
// if (subscription === 'pro') {
//   cost = 100
// } else {
//   cost = 0
// }

// let balance = 500;
// const payment = 2000;

// console.log(`some random ${payment}`);

// if (payment <= balance) {
//   console.log('ok');
//   balance -= payment;
//   console.log(`on your account ${balance}`);
// }

// const str = "12a";
// console.log(Number.isNaN(str));
// console.log(isNaN(str));
// if (3 > 4) {
//   console.log("Pravda");
// } else {
//   console.log("NePravda");
// }
// const value = 10;

// if (value > 9) {

// }else if (value > 11) {

// }else if (value > 12){

// }else {

// }
// for (let i = 1; i > 10; i += 1) {
//   console.log(i);
// }
// const response = prompt("Name?");
// const result = "Norman";

// if (response === result) {
//   alert("Correct!");
// } else {
//   alert("Nope!");
// }

// alert(response === result ? 'Correct' : 'Nope!')

// const hours = 14;
// const minutes = 24;
// let timestring;
// if (minutes) {
//   timestring = `${hours}h. ${minutes}m.`;
// } else {
//   timestring = `${hours}h.`;
// }
// console.log(timestring);
// const userInput = Number(prompt("Put here some number"));

// if (!userInput) {
//   console.log("It's 0");
// } else if (userInput > 0) {
//   console.log("It's positive number");
// } else {
//   console.log("It's negative number");
// }

// const a = 10;
// const b = 180;

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(b);
//   } else if (a === b) {
//     console.log("they are the same");
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 512);
// }
// let login = prompt("Please enter your name");
// console.log(login);
// if (login) {
//   login = login.toLowerCase();
//   if (login === "admin") {
//     const password = prompt("Give your password");
//     if (password === "admin")
//     console.log("I am admin hi")
//   }else{
//     console.log("fuck off")
//   }

// }
// function foo(max, min) {
//   let total = -0;
//   for (let i = max; i > min; i -= 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//       total += 1;
//     }
//   }
//   return total;
// }
// console.log(foo(50, 23));
// const arr = [1, 2, 3, 4, 5];
// const firstNumber = arr[0];
// const lastNumber = arr[arr.length - 1];
// console.log(lastNumber);
//! Масиви

// const genres = ["Jazz", "Bluez"];
// genres.push("Roken");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift("Country", "Reggi");
// console.log(genres);

// genres.splice(genres.length, 0, "Rock");
// genres.splice(0, 1, "Country", "Reggi");
// console.log(genres);

// ? Масиви та рядки

// const value = "15 17";
// const arr = value.split(" ");
// const first = Number(arr[0]);
// const second = Number(arr[arr.length - 1]);
// console.log(second);

// * Перший варіант
// const fruit = ["1", "2", "3", "4", "5"];
// for (let i = 0; i < fruit.length; i += 1) {
//   console.log(`${i + 1} - ${fruit[i]}`);
// }
// *Другий варіант
// const fruit = ["1", "2", "3", "4", "5"];
// for (let i = 0, num = 1; i < fruit.length; i += 1) {}

// const string = "Welcome to the future";
// const arr = string.split("").reverse().join("");
// console.log(arr);

// // !Сортування за алфавітом!! може пригодитись в моїх проектах.
// const langs = ["a", "c", "d", "x", "y", "b", "i"];
// langs.sort((a, b) => a.localeCompare(b));
// console.log(langs);

// function add(a, b, c) {
//   let result = a + b + c;
//   console.log(`Addition result equals ${result}`);
//   return result;
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// book.pageCount = 99;
// let bookPages = book.pageCount;
// console.log(bookPages);

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };
// console.log(user.name);
// console.log(user.age);
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook() {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Maugli", "NeRabotae");
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
//   addBook() {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}
const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push("Maugli");
  },
  // removeBook(bookName) {
  //   const bookIndex = this.books.indexOf(bookName);
  //   this.books.splice(bookIndex, 1);
  // },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
