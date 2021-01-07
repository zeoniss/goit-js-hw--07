import products from './products.js'
console.table(products)

const product = {
    name: 'Сервоприводы',
    description: 'текст-рыба',
    price: 2000,
    available: true,
}
const containerRef = document.createElement('div')
containerRef.classList.add('product-card')

const titleRef = document.createElement('h2')
titleRef.textContent = product.name
titleRef.classList.add('product-card--name')

const descrRef = document.createElement('p')
descrRef.textContent = product.description

const priceRef = document.createElement('p')
priceRef.textContent = `Цена товара - ${product.price} биткоинов`
containerRef.append(titleRef, descrRef, priceRef)