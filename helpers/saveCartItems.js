const saveCartItems = (element) => {
    const storage = JSON.stringify(element);
    localStorage.setItem('cartItems', storage);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
