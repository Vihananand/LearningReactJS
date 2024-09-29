import PropTypes from "prop-types";
// import ProductItem from "./components/product-item";

const dummyProductData = ["Product1", "Product2", "Product3"];

function ProductList({ name, city }) { {/* here I have destructured the props that I have sent fron the app.jsx file */}

    return (
        <div>
            <h2>E-Commerce Website</h2>
            <h4>My name is {name} and I live in the city of {city}</h4>
            {/* <ProductItem/> This jsx is taken from product item jsx */}
            <ul>
                {
                    dummyProductData.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
};

export default ProductList;
