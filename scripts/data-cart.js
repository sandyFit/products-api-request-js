let cart;
try {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
} catch (error) {
  console.error('Error parsing cart data:', error);
  cart = [];
}
export { cart };