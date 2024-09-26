let getListOfProducts = document.querySelector(".list-of-products");

function renderProducts(getProducts){
    getListOfProducts.innerHTML = getProducts.map(singleProduct => `<p>${singleProduct.title}</p>`).join(" ")
}

async function fetchListOfProducts() {
    try{
        const apiResponse = await fetch('https://dummyjson.com/products', {
            method : "GET",
        })

        const result = await apiResponse.json();
        console.log(result);

        if(result?.products?.length > 0) renderProducts(result?.products)
    }
    catch(e){
        console.log(e);
    }
    
}

fetchListOfProducts();