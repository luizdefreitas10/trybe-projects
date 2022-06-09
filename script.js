const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const theTarget = event.target;
  theTarget.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const sentToLocal = () => {
  const cartItems = document.getElementById('cart-id').innerHTML;
  localStorage.setItem('cartItems', cartItems);
};

const getTheLocal = () => {
  const olCartItems = document.getElementById('cart-id');
  const local = localStorage.getItem('cartItems');
  olCartItems.innerHTML = local;
  olCartItems.addEventListener('click', cartItemClickListener);
};

const toCartItems = () => {
  const cartItems = document.querySelector('.cart__items');
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const selectedItem = button.parentElement.firstElementChild.innerHTML;
      const selectedData = await fetchItem(selectedItem);
      const newItem = {
        sku: selectedData.id,
        name: selectedData.title,
        salePrice: selectedData.price,
      };
      cartItems.appendChild(createCartItemElement(newItem));
      sentToLocal();
      calculatePrice();
    });
  });
};

const gettingProductData = async () => {
  const creatingProductSection = document.querySelector('.items');
  const jsonResults = await fetchProducts('computador');
  jsonResults.results.forEach((element) => {
    const product = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    creatingProductSection.appendChild(createProductItemElement(product));
  });
  toCartItems();
};

const cleanCart = () => {
  const esvaziar = document.querySelector('.empty-cart');
  esvaziar.addEventListener('click', () => {
    const itens = document.querySelector('.cart__items');
    itens.innerHTML = '';
    localStorage.removeItem('cartItems');
  });
};

window.onload = () => {
  gettingProductData();
  getTheLocal();
  cleanCart();
};
