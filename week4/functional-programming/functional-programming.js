
// functional programming: forEach, map, filter, reduce, some, any, find, findIndex

const numbers = [1, 2, 3, 4, 5]
// map returns another array with the same length

/*
const mapData = (arr) => {
    const newArr = []
    for(const item of arr){
        newArr.push({item:item, square:item ** 2})
    }
    return newArr
}

console.log(mapData(numbers))

*/

const newArra = numbers.map((item) => item ** 2)

console.log(newArra)

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// const prices = products.map((product) => product.price == '' || product.price == ' ' ?  0:  product.price)

const prices = products.map((product) => product.price)

// const filteredPrices = prices.filter((price) => {
//     return price > 0
// })

const filteredPrices = prices.filter((price) => {
    return typeof(price) === 'number'
})

console.log(filteredPrices)

console.log(prices)

const total = filteredPrices.reduce((a, b) => a * b)
console.log(total)

numbers.forEach((item, index) => {
    console.log(item)
})

const three = numbers.find((num) => num == 3)
console.log(three)
const indexOfthree = numbers.findIndex((num) => num == 3)
console.log(indexOfthree)

// some, every


const allAreEvens = numbers.every((num) => num % 2 === 0)
console.log(allAreEvens)