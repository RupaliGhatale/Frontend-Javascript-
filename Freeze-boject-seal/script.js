let username = 'ARudrakshi'

const user = {
  firstName: 'Rupali',
  lastName: 'SGhatale',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'Karnataka',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

// Object.seal(user)
Object.freeze(user)

console.log('isGraduate' in user);