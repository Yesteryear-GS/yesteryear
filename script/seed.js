'use strict'

const db = require('../server/db')
const {Order, Product, User} = require('../server/db/models')
async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await User.create({
    email: 'firstUser@email.com',
    password: 'firstPassword'
  })
  await User.create({
    email: 'secondUser@email.com',
    password: 'firstPassword'
  })
  await User.create({
    email: 'thirdUser@email.com',
    password: 'firstPassword'
  })

  await Product.create({
    name: 'Dunk-a-Roos',
    price: 450,
    imageUrl: 'https://i.redd.it/3phyzhloyxbz.jpg',
    year: '1990',
    description:
      'Dunk-a-Roos are a snack food from Betty Crocker, first launched in 1990. It consists of a snack-sized package containing cookies and icing; the cookies are meant to be dunked into the icing before eating.',
    manufacturer: 'Betty Crocker',
    itemQuantity: 50
  })
  await Product.create({
    name: 'Surge',
    price: 275,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51Yd6SuGTIL.jpg',
    year: '1996',
    description:
      'Surge is a citrus flavored soft drink first produced in the 1990s by The Coca-Cola Company to compete with Pepsi`s Mountain Dew.',
    manufacturer: 'Coca Cola',
    itemQuantity: 50
  })
  await Product.create({
    name: 'Spice Girl Fantasy Ball Lollipop',
    price: 190,
    imageUrl:
      'https://i.pinimg.com/originals/da/13/17/da131760d1fae4bc7ef444a8173227de.jpg',
    year: '1997',
    description:
      'Spice Girls Official Product! One lollipop of each member ~ Posh, Baby, Scary, Sporty and Ginger Spice in original packing. Each one includes a sticker.',
    manufacturer: 'Chupa Chupa',
    itemQuantity: 50
  })
  await Product.create({
    name: 'Triple Power Push Pops',
    price: 250,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41BErLI-%2BML._SY355_.jpg',
    year: '1986',
    description:
      'Three times the push power, three times the sweet candy pleasure, and three times as many options! Topps Triple Power Push Pops are three push pops in one: Separate slide controls let you choose Strawberry, Watermelon, or Blue Raspberry hard candies, one at a time or all at once!',
    manufacturer: 'Topps',
    itemQuantity: 50
  })
  await Product.create({
    name: 'Bubble Jug',
    price: 300,
    imageUrl: 'https://pbs.twimg.com/media/Cmm6bCeW8AAbRgf.jpg',
    year: '1990',
    description:
      'An old fashioned candy classic, Bubble Jug containers hold powdery candy nuggets that change into gum as you chew them! Featuring sweet, fruity flavors such as tropical fruit and watermelon, you`ll want to chug and chew all day long!',
    manufacturer: 'Hubba Bubba',
    itemQuantity: 50
  })

  await Product.create({
    name: 'Bop It',
    price: 2000,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/61MXB8H11JL._SL500_AC_SS350_.gif',
    year: '1996',
    description: 'Bop it, Twist it, Flick it!',
    manufacturer: 'Hasbro',
    itemQuantity: 10
  })

  await Product.create({
    name: 'Talkboy',
    price: 1000,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71ltGlnw%2BvL._SL1500_.jpg',
    year: '1992',
    description: 'Portable variable-speed cassette player and recorder.',
    manufacturer: 'Tiger Electronic',
    itemQuantity: 10
  })
  await Product.create({
    name: 'Moon Shoes',
    price: 2500,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81jZXz7XE6L._SL1500_.jpg',
    year: '1992',
    description:
      'Mini-trampolines for the feet, jump with anti-gravity effects!',
    manufacturer: 'Tiger Electronic',
    itemQuantity: 10
  })
  await Product.create({
    name: 'Beanie Babies',
    price: 500,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51dEVC%2B3-bL._SX425_.jpg',
    year: '1993',
    description:
      'Beanie Babies are a line of stuffed animal plush toys created by Ty Warner, who founded Ty Inc.. The toys are stuffed with plastic pellets rather than conventional soft stuffing, giving Beanie Babies a flexible feel.',
    manufacturer: 'Ty Warner',
    itemQuantity: 1000
  })
  await Product.create({
    name: 'Sky Dancer',
    price: 2000,
    imageUrl:
      'https://media1.popsugar-assets.com/files/thumbor/fUhR4hd1fMZUyCDQz1RUe96gSJE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/12/12/934/n/3019466/4df7171eaa5f8dbc_enhanced-buzz-14845-1369851403-13/i/Sky-Dancers.jpg',
    year: '1994',
    description: 'Sky Dancer spinning flying toy doll on floral base.',
    manufacturer: 'Galoob',
    itemQuantity: 300
  })

  await Product.create({
    name: 'The Fresh Prince of Bel-Air: Seasons 1-6',
    price: 6999,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91DEBqm9zSL._SX522_.jpg',
    year: '1990',
    description:
      'A young man from west Philadelphia is sent to live with his wealthy aunt and uncle in Bel-Air, California',
    manufacturer: 'Warner Home Video',
    itemQuantity: 100
  })
  await Product.create({
    name: 'The Lion King, VHS',
    price: 999,
    imageUrl:
      'https://i.ebayimg.com/14/!!d6!1sQBmM~$(KGrHqIOKkIErygVWNZSBLGdnW6hYg~~_1.JPG?set_id=89040003C1',
    year: '1995',
    description:
      "A young lion battles is tricked by his devious uncle into believing he was the cause of his father's death.",
    manufacturer: 'Disney Home Video',
    itemQuantity: 100
  })
  await Product.create({
    name: 'NSYNC, No Strings Attached',
    price: 1299,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Nsync_-_No_Strings_Attached.png/220px-Nsync_-_No_Strings_Attached.png',
    year: '2000',
    description: '',
    manufacturer: 'Jive Records',
    itemQuantity: 100
  })
  await Product.create({
    name: 'Spice Girls, Spice',
    price: 1299,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/01/Spice_Girls_-_Spice.png',
    year: '1996',
    description: 'Debut album of English girl group the Spice Girls, CD',
    manufacturer: 'Virgin Records',
    itemQuantity: 100
  })
  await Product.create({
    name: 'Hey Arnold!',
    price: 2999,
    imageUrl:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3271/32714741_sa.jpg;maxHeight=640;maxWidth=550',
    year: '1996',
    description:
      'Animated series about a fourth grader with a football shaped head and his friends growing up in an urban city.',
    manufacturer: 'Shout Factory',
    itemQuantity: 100
  })

  await Product.create({
    name: 'Game Boy Color',
    price: 8000,
    imageUrl:
      'https://www.lukiegames.com/assets/images/GBC/GBC_SYSTEM_TEAL.jpg',
    year: '1998',
    description: 'The Game Boy Color is a handheld game console by Nintendo',
    manufacturer: 'Nitendo',
    itemQuantity: 300
  })
  await Product.create({
    name: 'Tamagotchi',
    price: 1355,
    imageUrl:
      'http://1.bp.blogspot.com/_KlPx_bSlcuc/TRG5rGi7s0I/AAAAAAAAAK4/AIug5m_PUo4/s1600/2.jpg',
    year: '1996',
    description: 'Your very own handheld digital pet!',
    manufacturer: 'Bandai',
    itemQuantity: 300
  })
  await Product.create({
    name: 'Walkman',
    price: 7400,
    imageUrl: 'https://spectrum.ieee.org/image/MzE4MzE2NA.jpeg',
    year: '1994',
    description:
      'State of the art portable media player for all your music needs!',
    manufacturer: 'Sony',
    itemQuantity: 300
  })
  await Product.create({
    name: 'Poo-Chi',
    price: 5000,
    imageUrl: 'http://www.theoldrobots.com/images82/PooChi-w101.JPG',
    year: '2002',
    description: 'First generations of robopets!',
    manufacturer: 'Sega',
    itemQuantity: 300
  })
  await Product.create({
    name: 'Sega Genesis',
    price: 19900,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg',
    year: '1989',
    description:
      'The Sega Genesis, known as the Mega Drive in regions outside of North America, is a 16-bit home video game console developed and sold by Sega.',
    manufacturer: 'Sega',
    itemQuantity: 300
  })

  await Order.create({
    isCart: true,
    content: [
      {id: 1, itemQuantity: 2, price: 1900},
      {id: 3, itemQuantity: 1, price: 900}
    ],
    userId: 1
  })
  await Order.create({
    isCart: true,
    content: [{id: 1, itemQuantity: 2, price: 1900}],
    userId: 2
  })
  await Order.create({
    isCart: false,
    content: [{id: 2, itemQuantity: 2, price: 1900}],
    userId: 3
  })

  await Order.create({
    isCart: true,
    content: [
      {id: 17, itemQuantity: 1, price: 3000},
      {id: 5, itemQuantity: 3, price: 4000},
      {id: 20, itemQuantity: 2, price: 9800},
      {id: 10, itemQuantity: 3, price: 2000},
      {id: 2, itemQuantity: 7, price: 300},
      {id: 16, itemQuantity: 1, price: 7500}
    ],
    userId: 3
  })

  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}
// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}
// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
