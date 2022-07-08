export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((search) => search.json())
    .then((data) => data);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && !query) {
    const URL_CATEGORIES = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const response = await fetch(URL_CATEGORIES);
    const categories = await response.json();
    return categories;
  }
  if (!categoryId && query) {
    const URL_QUERY = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(URL_QUERY);
    const querySearch = await response.json();
    return querySearch;
  }
  if (categoryId && query) {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(URL);
    const catQuerySearch = await response.json();
    return catQuerySearch;
  }
}
