const fetchProducts = async (param) => {
  try {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const response = await fetch(endpoint);
  const responseJson = await response.json();
  return responseJson;
} catch (error) {
  return error;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
