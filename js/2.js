// const titleRef = document.createElement('h1')
// titleRef.textContent = 'Привет первому тэгу!'
// titleRef.classList.add('site-title')
// titleRef.id = 'title'
// console.log(titleRef)
// -------------------------------------------------------------
const product = {
    name: 'Сервоприводы',
    description: 'текст-рыба',
    price: 2000,
    available: true,
}

// const containerRef = document.createElement('div')
// containerRef.classList.add('product-card')
// console.log(containerRef)

// const titleRef = document.createElement('h2')
// titleRef.textContent = product.name
// titleRef.classList.add('product-card--name')
// console.log(titleRef)

// const descrRef = document.createElement('p')
// descrRef.textContent = product.description
// console.log(descrRef)

// const priceRef = document.createElement('p')
// priceRef.textContent = `Цена товара - ${product.price} биткоинов`
// console.log(priceRef)

// containerRef.append(titleRef, descrRef, priceRef)
// console.log(containerRef)
//     // -------------------------------------------------------------
// const siteNav = document.querySelector('.site-nav')
// const listItemRef = document.createElement('li')
// listItemRef.textContent = 'new item'
// siteNav.prepend(listItemRef)
//----------------------------------------------------------
// const users = [{
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: [
//             'Jacklyn Lucas',
//             'Linda Chapman',
//             'Adrian Cross',
//             'Solomon Fokes',
//         ],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//     },
// ]
// const getTotalBalanceByGender = (users, gender) => [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, { balance }) => total + balance, 0)
// console.log(getTotalBalanceByGender(users, 'male'))
// console.log(getTotalBalanceByGender(users, 'female'))

// console.log(sortByDescendingFriendCount)
// ------------------------------------------------------------------------------------------
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//     { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ]
// const MIN_BOOK_RATING = 8
//     // Пиши код ниже этой строки

// const names = books
//     .filter(({ rating }) => rating >= MIN_BOOK_RATING)
//     .map((names) => names.author)

// console.log(names)
// ------------------------------------------------------------------------------------------
// const getTotalFriendCount = users =>
//     Object.values(users.friends).reduce((total, index) => total + index, 0);
// ------------------------------------------------------------------------
// const players = [
//     { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//     { name: "Поли", playtime: 469, gamesPlayed: 2 },
//     { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//     { name: "Киви", playtime: 241, gamesPlayed: 1 }
// ];
// // Пиши код ниже этой строки
// const averageTimePerGame = players.map(
//     player => player.playtime / player.gamesPlayed
// );

// console.log(averageTimePerGame);\
// ------------------------------------------------------------------------------
// const authors = [
//         'Ли Танит',
//         'Бернард Корнуэлл',
//         'Роберт Шекли',
//         'Федор Достоевский',
//         'Говард Лавкрафт',
//     ]
//     // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b))
// console.log(authorsInAlphabetOrder)
// const authorsInReversedOrder = [...authors].sort((b, a) => b.localeCompare(a))
// console.log(authorsInReversedOrder)
// // -----------------------------------------------------------------------------------
// const students = [
//     { name: 'Манго', score: 83 },
//     { name: 'Поли', score: 59 },
//     { name: 'Аякс', score: 37 },
//     { name: 'Киви', score: 94 },
// ]

// const inAscendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
// )

// const inDescendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
// )

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//     firstStudent.name.localeCompare(secondStudent.name),
// )
// console.log(inAscendingScoreOrder)
// console.log(inDescendingScoreOrder)
// console.log(inAlphabeticalOrder)
// _________________________________________________________________________________________
// const books = [
//         { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//         { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//         { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//         { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//         { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
//     ]
//     // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//     firstBook.author.localeCompare(secondBook.author),
// )

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//     secondBook.author.localeCompare(firstBook.author),
// )

// const sortedByAscendingRating = [...books].sort(
//     (firstBook, secondBook) => firstBook.rating - secondBook.rating,
// )

// const sortedByDescentingRating = [...books].sort(
//     (firstBook, secondBook) => secondBook.rating - firstBook.rating,
// )
// console.log(sortedByAuthorName)
// console.log(sortedByReversedAuthorName)
// console.log(sortedByAscendingRating)
// console.log(sortedByDescentingRating)