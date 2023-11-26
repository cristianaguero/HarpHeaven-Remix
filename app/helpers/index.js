export function moneyFormat(price) {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}