import { getAllProducts, getSingleProduct } from "./requests/products";
import { markupProducts, markupSingleProduct } from "./services/markupService";

const allProducts = document.querySelector('#allProducts');
const singleProductForm = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct')

getAllProducts().then(({ data: { products } }) => {
    console.log(products);
    const markupCards = markupProducts(products);
    allProducts.insertAdjacentElement('beforeend', markupCards);
})


singleProductForm.addEventListener('submit', findSingleProdunt);

function findSingleProdunt(e) {
    e.preventDefault();
    const id = e.target.elements.id.value;
    getSingleProduct(id).then(console.log());
    getSingleProduct(id).then(({data}) => {
        const markupSingleCard = markupSingleProduct(data);
        singleProduct.innerHTML = markupSingleCard;
        singleProductForm.reset();
    });

}

