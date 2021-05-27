import logo from './logo.svg';
import './App.css';
import React from 'react'


class Product extends React.Component {
  render () {
    const {product} = this.props
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

 
}


class Products extends React.Component {
 render(){
  const {products} = this.props
  return (
    <div className='products'>
    {
      products.map((product) => <Product product = {product} />)
    }
  </div>
   
  )
 }
}

class App extends React.Component {
  render () {
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
    return  (
      <div className="App">
      <header className="App-header">
       <h1>Getting Started React</h1>
       <Products products = {products} />
      </header>
    </div>
    )

  }

}






export default App;