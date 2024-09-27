import './App.css'
import ProductList from './assets/components/products/product-list'
// import ClassBasedComponents from './assets/components/class-based-components'
// import FunctionalComponent from './assets/components/functional-component'

//App -> ProductList -> ProductItem -> ButtonComponent

function App() {

  return (
    <div>
      <h1>Live Project Using ReactJS</h1>
      {/* <ClassBasedComponents/>
      <FunctionalComponent/> */}
      <ProductList/> {/* This function is taken from Product list jsx */}
    </div>
  )
}

export default App
