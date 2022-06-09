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

const calculatePrice = () => {
  const tagTotalPrice = document.querySelector('.total-price');
  const liCartItem = document.querySelectorAll('.cart__item');
  let totalPrice = 0;
  liCartItem.forEach((li) => {
    const resultForEach = li.innerHTML.split('$');
    totalPrice += parseFloat(resultForEach[1]);
  });
tagTotalPrice.innerText = parseFloat(totalPrice);
};

const cartItemClickListener = (event) => {
  const theTarget = event.target;
  theTarget.remove();
  calculatePrice();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const sendToLocal = () => {
  const cartItems = document.getElementById('cart-id').innerHTML;
  localStorage.setItem('cartItems', cartItems);
};

const getLocalStorage = () => {
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
      sendToLocal();
      calculatePrice();
    });
  });
};

const loadingFunction = () => {
  const loading = createCustomElement('p', 'loading', 'carregando...');
  const sectionItems = document.querySelector('.items');
  sectionItems.appendChild(loading);
};

const deletingLoading = () => {
  const loadingText = document.querySelector('.loading');
  loadingText.remove();
};

const gettingProductData = async () => {
  const creatingProductSection = document.querySelector('.items');
  const jsonResults = await fetchProducts('computador');
  deletingLoading();
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
    const totalPrice = document.querySelector('.total-price');
    const itens = document.querySelector('.cart__items');
    localStorage.removeItem('cartItems');
    itens.innerHTML = '';
    totalPrice.innerText = 0;
  });
};

const createHtmlTotalPrice = () => {
  const sectionClassCart = document.querySelector('.cart');
  const createH1 = document.createElement('h1');
  createH1.className = 'total-price';
  sectionClassCart.appendChild(createH1);
};

window.onload = () => {
  loadingFunction();
  gettingProductData();
  getLocalStorage();
  cleanCart();
  createHtmlTotalPrice();
  calculatePrice();
};
