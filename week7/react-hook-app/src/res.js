import React from 'react'
import './App.css';
class App extends React.Component {
  state = {
    count:0,
    name:'Asabeneh',
    pet:'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
  }
  addOne = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  changePet = () => {
    let dogURL =
    'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
  let catURL =
    'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
  let result = this.state.pet === catURL ? dogURL : catURL
  this.setState({pet:result})
  }
 render( ){
  return (
    <div className="App">
    <h1>React Hooks</h1>
    <div>
    {this.state.count} <br />
    {this.state.name} <br />
    <button onClick = {this.addOne}>Add One</button>
    </div>
   
   
    <div>
    <img src = {this.state.pet} alt = 'Cute cat' />
    <div>
    <button onClick = {this.changePet}>Change Pet</button>
    </div>
    </div>
   
  
    </div>
  )
 }
}

export default App;