import PropTypes from "prop-types";
import ProductItem from "./components/product-item";
import "./product-list-style.css"

function ProductList({ name, city, dummyProductData }) { {/* here I have destructured the props that I have sent fron the app.jsx file so that I can use here*/}

    return (
        <div>
            {/* <h2 className="title">E-Commerce Website</h2> */}
            <h4 className='text-white text-xl'>My name is {name} and I live in the city of {city}</h4>
            {/* <ProductItem/> This jsx is taken from product item jsx */}
            <ul>
                {
                    dummyProductData.map((item, index) => (
                    <ProductItem singleProductItem={item} key={index}/>
                ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    dummyProductData: PropTypes.string.isRequired,
};

export default ProductList;
