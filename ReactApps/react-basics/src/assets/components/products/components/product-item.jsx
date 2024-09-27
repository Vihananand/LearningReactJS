function ButtonComponent(){
    return(
        <button>Click Me!</button>
    );
}

function ProductItem(){
    return(
        <div>
            <p>Product 1</p>
            <ButtonComponent/> {/* As the button component is present in the same file we dont need to export the button component */}
        </div>
    );
}

export default ProductItem;