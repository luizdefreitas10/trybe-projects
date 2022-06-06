const fetchItem = async (id) => {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
