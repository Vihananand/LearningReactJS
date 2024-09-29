import PropTypes from "prop-types";
import styles from "./product-item-style.module.css";

function ButtonComponent(){
    return(
        <button className={styles.buttonStyle}>Click Me!</button>
    );
}

function ProductItem({singleProductItem, key}){
    return(
        <div key={key}>
            <p>{singleProductItem}</p>
            <ButtonComponent/> {/* As the button component is present in the same file we dont need to export the button component */}
        </div>
    );
}

ProductItem.propTypes = {
    singleProductItem: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
};

export default ProductItem;