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
