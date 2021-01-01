const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
]

// Пиши код ниже этой строки
const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
]

// Пиши код ниже этой строки
function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
}

const messages = orders.map(
    composeMessage.call((order, position) => {
        return order, position + 1
    }),
)