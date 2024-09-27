// import ProductItem from "./components/product-item";

const dummyProductData = ["Product1", "Product2", "Product3"]

function ProductList(){
    return(
        <div>
            <h2>E-Commerce Website</h2>
            {/* <ProductItem/> THis jsx is taken from product item jsx */}
            <ul>
                {
                    dummyProductData.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    );
}

export default ProductList;