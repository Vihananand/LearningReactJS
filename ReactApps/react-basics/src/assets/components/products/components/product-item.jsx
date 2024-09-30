import PropTypes from "prop-types";
import "./product-item-style.css";

function ButtonComponent(){
    return(
        <button className='border-2 text-white pl-4 pr-4 pt-2 pb-2 rounded-xl hover:bg-slate-500'>Buy Now!</button>
    );
}

function ProductItem({singleProductItem, key}){
    return(
        <div className='border-2 p-2 m-10 flex flex-col justify-center items-center rounded-2xl gap-4' key={key}>
            <p className='text-3xl text-white'>{singleProductItem}</p>
            <ButtonComponent/> {/* As the button component is present in the same file we dont need to export the button component */}
        </div>
    );
}

ProductItem.propTypes = {
    singleProductItem: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
};

export default ProductItem;