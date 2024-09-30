import './App.css'
import ProductList from './assets/components/products/product-list'
// import ClassBasedComponents from './assets/components/class-based-components'
// import FunctionalComponent from './assets/components/functional-component'

//App -> ProductList -> ProductItem -> ButtonComponent

const dummyProductData = ["Product1", "Product2", "Product3"];

function App() {

  return (
    <div className='flex flex-col justify-center items-center gap-10 h-100vh bg-black'>
      <h1 className='text-5xl font-bold mt-10 text-white'>Live Project Using ReactJS</h1>
      {/* <ClassBasedComponents/>
      <FunctionalComponent/> */}
      <ProductList dummyProductData={dummyProductData} name="Vihan Anand" city="Gorakhpur"/> {/* This function is taken from Product list jsx and "name" and "city" props are passed to the product-list.jsx which can be used in that component now */}
    </div>
  )
}

export default App
