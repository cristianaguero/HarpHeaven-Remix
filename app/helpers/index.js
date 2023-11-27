export function moneyFormat(price) {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function dateFormat(date) {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}