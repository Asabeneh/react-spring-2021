import logo from './logo.svg';
import './App.css';



const Product = (props) => {
  console.log(props)
  const {product} = props
  console.log(product)
  return (
    <div className="product">
    <h1>{product.product.toUpperCase()}</h1>
    {
      product.price > 0 ? <p>Price {product.price} Euro</p> : <p>Price is not available</p>
    }
  
    <p>{product.description}</p>


  </div>

  )
}


const Products = (props) => {
  const {products} = props
  return (
    <div className='products'>
    {
      products.map((product) => <Product product = {product} />)
    }
  </div>
   
  )
}




const App = () => {
  
const products = [
  { 
    product: 'banana', 
    price: 3, 
    description:'The best banana ever grown on planet Earth.'
  },
  { 
    product: 'mango', 
    price: 6,
   description:'The best mango ever grown on planet Earth.'},
  { 
    product: 'potato', 
    price: ' ', 
    description:'The best potato ever grown on planet Earth.' },
  { product: 'avocado', 
  price: 8, 
  description:'The best avocado ever grown on planet Earth.'
},
  { 
  product: 'coffee', 
  price: 10,
   description:'The best coffee ever grown on planet Earth.'},
  { product: 'tea', 
  price: '', 
  description:'The best tea ever grown on planet Earth.'
 },
]
  return (
    <div className="App">
      <header className="App-header">
       <h1>Getting Started React</h1>
       <Products products = {products} />
      
      </header>
    </div>
  );
}


export default App;
