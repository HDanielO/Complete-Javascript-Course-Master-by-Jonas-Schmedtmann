'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// DATA FOR ASSIGNMENTS
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//ASSIGNMENT 1.1

const [firstBook, secondBook] = books;

//ASSIGNMENT 1.2

const [, , thirdBook] = books;

// ASSIGNMENT 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;

//ASSIGNMENT 1.4

const ratingStars = [63405, 1808];

const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;

// ASSIGNMENT 2.1

const { title, author, ISBN } = books[0];

// ASSIGNMENT 2.2

const { keywords: tags } = books[0];

// ASSIGNMENT 2.3

const { language, programmingLanguage = 'unknown' } = books[6];

// ASSIGNMENT 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);

// ASSIGNMENT 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

// ASSIGNMENT 2.6

const printBookInfo = function ({
  title,
  author: [, a],
  year = 'year unknown',
}) {
  console.log(`${title} by ${a}, ${year}`);
};

printBookInfo(books[0]);

// ASSIGNMENT 3.1

const bookAuthors = [...books[0].author, ...books[1].author];

// ASSIGNMENT 3.2

const spellWord = function (word) {
  const destructuredWord = [...word];
  let spaceWordArr = '';
  for (let i = 0; i < destructuredWord.length; i++) {
    spaceWordArr += destructuredWord[i];
    spaceWordArr += ' ';
  }
  spaceWordArr.slice(0, -1); // removes the last character in the string with is a " "
  return spaceWordArr;
};

const testword = spellWord('Daniel');

console.log(testword);

// ASSIGNMENT 4.1

const [mainKeyword, ...rest] = books[0].keywords;

// ASSIGNMENT 4.2

const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// ASSIGNMENT 4.3

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// ASSIGNMENT 5.1

function hasExamplesInJava(bookObject) {
  return bookObject.programmingLanguage === 'Java' || 'no data available';
}

// ASSIGNMENT 5.2

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}

// ASSIGNMENT 6.1

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title}" provides no data about its online content`
    );
}

// but this does not account for books that its onlineContent property has been set to false

// ASSIGNMENT 7.1

for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

// ASSIGNMENT 7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

// CODING CHALLENGE 1

// GAME DATA
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

function printGoals(...goalScorers) {
  for (let i = 0; i < goalScorers.length; i++) {
    console.log(goalScorers[i]);
  }
  console.log(`Total number of Goals scored = ${goalScorers.length}`);
}

team1 > team2 && console.log('Team 1 is most likely to win');
team1 > team2 || console.log('Team 2 is most likely to win');

//for..of operator

//ASSIGNMENT 8.1
let pageSum = 0;

for (let book of books) {
  pageSum += book.pages;
}

//ASSIGNMENT 8.2

const allAuthors = [];

for (let book of books) {
  if (typeof book.author === 'object') {
    allAuthors.push(...book.author);
  } else {
    allAuthors.push(book.author);
  }
}

console.log(allAuthors);

//ASSIGNMENT 8.3

for (const [index, element] of allAuthors.entries()) {
  console.log(`${index + 1}. ${element}`);
}

//ASSIGNMENT 9.1

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[2][1],
  [bookData[2][0]]: bookData[2][1],
  // ...
};

// ASSIGNMENT 9.2
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
  // ...
};
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}

printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"

// ASSIGNMENT 10.1
function getFirstKeyword(book) {
  return book.keywords?.[0];
}
// Lesson 11
console.log(Object.keys(restaurant)); // to store all the object property(keys) names in an array. we can then use for (..of ) loop to loop through the elements in the array

console.log(Object.values(restaurant)); // stores all the object values in an array.

console.log(restaurant.mainMenu.entries());

for (const [i, e] of restaurant.mainMenu.entries()) {
  console.log(`${i + 1} ${e}`);
}

//entries can also be used in objects to return the key and value together, just like how it returns the index and the value together when uses it with an array.

console.log(Object.entries(restaurant));
//this creates an array that contains mini arrays which contain the key(as the first item) and the value as the second item.
// [[key1,value1],[key2,value2],[key3,value3]...]

//ASSIGNMENT 11.1
const entries = [];

for (const details of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([details]);
}
//ASSIGNMENT 11.2
Object.values(books[0].thirdParty.goodreads);

for (const [i, e] of Object.values(books[0].thirdParty.goodreads).entries()) {
  entries[i].push(e);
}
//ASSIGNMENT 11.3

const entries2 = Object.entries(books[0].thirdParty.goodreads);

//ASSIGNMENT 11.4

console.log(entries, entries2);

//  CODING CHALLENGE 2

//1
for (const [i, e] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${e}`);
}

//2
let oddsTotal = 0;
for (const odds of Object.values(game.odds)) {
  oddsTotal += odds;
}
const oddsAverage = oddsTotal / Object.values(game.odds).length;
console.log(oddsAverage);

//3

for (const [team, odd] of Object.entries(game.odds)) {
  if (game[team]) {
    console.log(`Odd of ${game[team] && 'Victory ' + game[team]}: ${odd} `);
  } else {
    console.log(`Odd of draw: ${odd} `);
  }
}

//4(bonus)

// const scorers = {};

// for (const goalScorer of game.scored) {
//   scorers[goalScorer] = scorers[goalScorer] && 2;
//   scorers[goalScorer] = scorers[goalScorer] || 1;
// }

// console.log(scorers);
//the solution was to use a ternary operator.

//solution
//3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;

  console.log(`Odd of ${teamStr}: ${odd} `);
}

//4
const scorers = {};

for (const goalScorer of game.scored) {
  scorers[goalScorer] ? scorers[goalScorer]++ : (scorers[goalScorer] = 1);
}

console.log(scorers);

//SETS
const orderSet = new Set(['Pasta', 'Fan', 1]);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('boy'));
console.log(orderSet.has(1));
console.log(orderSet.add('boy'));
console.log(orderSet.delete('Fan'));

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

console.log(italianFoods.intersection(mexicanFoods));

console.log([
  ...new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
  ]).intersection(
    new Set(['tortillas', 'beans', 'rice', 'tomatoes', 'avocado', 'garlic'])
  ),
]);

//ASSIGNMENT 12.1

const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}

console.log(allKeywords);

//ASSIGNMENT 12.2

const uniqueKeywords = new Set(allKeywords);

//ASSIGNMENT 12.3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);

//ASSIGNMENT 12.4
uniqueKeywords.delete('business');

//ASSIGNMENT 12.5
const uniqueKeywordsArr = [...uniqueKeywords];

//ASSIGNMENT 12.6
uniqueKeywords.clear();

//MAPS FUNDAMENTALS

const restaurantMap = new Map();

console.log(restaurantMap);

restaurantMap.set('a', 1);
restaurantMap.set('b', 2);
restaurantMap.set('c', 3);

console.log(restaurantMap);
console.log(restaurantMap.set('d', 4));
console.log(restaurantMap.get('d'));
console.log(restaurantMap.has('d'));
console.log(restaurantMap.delete('d'));

//ASSIGNMENT 13.1

// const bookMap = new Map();
// bookMap.set('title', 'Clean Code');
// bookMap.set('author', 'Robert C. Martin');
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

// ASSIGNMENT 13.2
bookMap.set('pages', 464);

// ASSIGNMENT 13.3
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
// ASSIGNMENT 13.4
console.log(bookMap.size);
// ASSIGNMENT 13.5
bookMap.has('author') || console.log('The author of the book is known');
console.log(bookMap);

//MAPS ITERATION
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));

// console.log(question.get(answer === question.get('correct')));

// ASSIGNMENT 14.1
const firstBookMap = new Map(Object.entries(books[0]));
// ASSIGNMENT 14.2
for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') {
    console.log(key);
  }
}

//CODING CHALLENGE 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
console.log(`An event happened, on 
average, every ${90 / gameEvents.size} minutes`);
//4
for (const [key, value] of gameEvents) {
  if (key >= 0 && key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else if (key >= 45) {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}

let firstName = 'Dan is a good boy';
firstName = firstName.slice(0, -1);
console.log(firstName);

function checkMiddleSeat(seat) {
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    console.log('This is a middle seat');
  } else {
    console.log('This is not a middle seat');
  }
}

// ASSIGNMENT 15.1
checkMiddleSeat('11B');
checkMiddleSeat('10A');
checkMiddleSeat('1E');

const book1 = books[0].ISBN;
console.log(book1[6], book1[4], book1[9], book1[8]);

// ASSIGNMENT 15.2
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

console.log(quote.indexOf('chess'));

// ASSIGNMENT 15.3
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// ASSIGNMENT 15.4

const isContributor = authorName => {
  if (authorName.slice(authorName.lastIndexOf(' ') + 1) === '(Contributor)') {
    console.log(true);
  } else {
    console.log(false);
  }
};

isContributor('Julie Sussman');

const isContributor2 = authorName => {
  return authorName.lastIndexOf('(Contributor)') !== -1;
};

isContributor2('Julie Sussman');

const correctName = name => {
  const nameLower = name.toLowerCase();
  const correctedName = nameLower[0].toUpperCase() + nameLower.slice(1);
  return correctedName;
};

console.log(correctName('dANieL'));

console.log('DanielD'.replace('D', 'B'));
console.log('DanielD'.replaceAll('D', 'B'));

// ASSIGNMENT 16.1

function normalizeAuthorName(name) {
  if (name.includes('(Contributor)')) {
    name = name.slice(0, name.indexOf('(Contributor)'));
  }
  const lowerCaseName = name.trim().toLowerCase();
  const firstWordCapitalized = lowerCaseName.replace(
    lowerCaseName[0],
    lowerCaseName[0].toUpperCase()
  );
  return firstWordCapitalized.replace(
    firstWordCapitalized[firstWordCapitalized.indexOf(' ') + 1],
    firstWordCapitalized[firstWordCapitalized.indexOf(' ') + 1].toUpperCase()
  );
}

console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// ASSIGNMENT 16.2
const newBookTitle = books[1].title.replace('Programs', 'Software');

// ASSIGNMENT 16.3

function logBookTheme(bookTitle) {
  bookTitle = bookTitle.toLowerCase();
  if (bookTitle.includes('computer')) {
    console.log('This book is about computers');
  } else if (
    bookTitle.includes('algorithms') &&
    bookTitle.includes('structures')
  ) {
    console.log('This book is about algorithms and data structures');
  } else if (bookTitle.endsWith('system') || bookTitle.endsWith('systems')) {
    if (!bookTitle.includes('operating')) {
      console.log(
        'This book is about some systems, but definitely not about operating systems'
      );
    }
  }
}

const [myFirstName, mySecondName] = 'Daniel Hameed'.split(' ');

console.log('Daniel'.split(''));
console.log(['Mr.', myFirstName, mySecondName].join());

function capitalizeNames(names) {
  names = names.toLowerCase().trim();
  const nameArr = names.split(' ');
  let capitalizedNames = '';
  for (let i = 0; i < nameArr.length; i++) {
    capitalizedNames += nameArr[i].replace(
      nameArr[i][0],
      nameArr[i][0].toUpperCase()
    );
    capitalizedNames += ' ';
  }
  return capitalizedNames.trim();
}

console.log(capitalizeNames(' daniel Hameed Olanrewaju pHilip  '));

function maskNumber(atmNumber) {
  if (atmNumber.length === 16) {
    return atmNumber.slice(-4).padStart(atmNumber.length, '*');
  } else if (atmNumber.length < 16) {
    return 'Number incomplete!!';
  } else {
    return 'Number exceeds 16 digits';
  }
}

console.log(maskNumber('2034399002125581'));
console.log(maskNumber('20343222222202125581'));

console.log('Daniel'.repeat(2));

// ASSIGNMENT 17.1
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
function logBookCategories(bookCategories) {
  const categoriesArr = bookCategories.split(';');
  for (const category of categoriesArr) {
    console.log(category);
  }
}
logBookCategories(bookCategories);

// ASSIGNMENT 17.2
function getKeywordsAsString(books) {
  const keywordsArr = [];
  for (const book of books) {
    keywordsArr.push(...book.keywords);
  }
  const keywordUniqueArr = [...new Set(keywordsArr)];

  return keywordUniqueArr.join(';');
}

console.log(getKeywordsAsString(books));

//ASSIGNMENT 17.3
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
function logBookChapters(bookChapters) {
  for (const book of bookChapters) {
    console.log([book[0].padEnd(20, '_'), book[1]].join(' '));
  }
}

logBookChapters(bookChapters);

// CODING CHALLENGE 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', function camelCaseConverter() {
  const inputText = document.querySelector('textarea').value;

  const stringArr = inputText.split('\n');

  const trimStringArr = [];
  for (const str of stringArr) {
    trimStringArr.push(str.trim());
  }

  for (const str of trimStringArr) {
    let [word1, word2] = str.split('_');
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    word2 = word2.replace(word2[0], word2[0].toUpperCase());
    console.log(word1 + word2);
  }
});
