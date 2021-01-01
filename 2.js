const service = {
    mailingList: ["mango@mail.com", "poly@hotmail.de", "ajax@jmail.net"],
    subscribe(email) {
        this.mailingList.push(email);
        return `Почта ${email} добавлена в рассылку.`;
    },
    unsubscribe(email) {
        this.mailingList = this.mailingList.filter(e => e !== email);
        return `Почта ${email} удалена из рассылки.`;
    }
};

function logAndInvokeAction(email, action) {
    console.log(`Выполняем действие с ${email}.`);
    return action(email);
}
logAndInvokeAction(service.subscribe.bind(service));
console.log(logAndInvokeAction("kiwi@mail.uk", this.subscribe));
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(this.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/

console.log(logAndInvokeAction("poly@hotmail.de", this.unsubscribe));
// Почта poly@hotmail.de удалена из рассылки.

console.log(this.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']