export async function getCategories() {
  // Implemente aqui
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const categories = response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  if (categoryId && !query) {
    const URL_CATEGORIES = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}`;
    const response = await fetch(URL_CATEGORIES);
    const categories = response.json();
    return categories;
  }
  if (!categoryId && query) {
    const URL_QUERY = `https://api.mercadolibre.com/sites/MLB/search?q=$${query}`;
    const response = await fetch(URL_QUERY);
    const querySearch = response.json();
    return querySearch;
  }

  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`)
    .then((data) => data.json());
}
