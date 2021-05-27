import logo from './logo.svg';
import React, {Component} from 'react'
import axios from 'axios'
import './App.css';

//GET, POST, PUT, DELETE
//HTTP Request response cycle


// MOUNTING
// UPDATING
// UNMOUNTING

class App extends Component {
  state = {
    countries:[],
    users:['Asabeneh','Eyob','Kirsi','Rauf','Guilia','Maria'],
    currentUser:''
  }
  constructor(props){
    super(props)
    console.log('I am the constructor and I am the first to be executed')
  }
  componentDidMount (){
    const url = 'https://restcountries.eu/rest/v2/all'
    axios.get(url).then(response => {
      this.setState({countries:response.data})

    })
    
    // fetch(url)
    // .then((response) =>  response.json())
    // .then((data) => {
    //   this.setState({
    //     countries:data
    //   })
    // })
    // this.selectUser()
    // console.log('I am componentDidMount and I will be last')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('I am the componentDidUpdate lifecyle')
    console.log(prevProps, prevState)
   
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('I am shouldComponentUpdate')
    console.log(nextState)
    // if(nextState.currentUser =='Asabeneh' || nextState.currentUser =='Kirsi'){
    //   return false
    // }
    return true
  }

  selectUser = () => {
    let index = Math.floor(Math.random() * this.state.users.length)
    let user = this.state.users[index]
    this.setState({currentUser:user})
  }
   



  renderCountry = () => {
    return this.state.countries.map(({name, capital, languages, population, flag}) => {
      const langNames = languages.map(({name}) => name)
      return  (<div className='country'>
      <div>
        <h1>{name.toUpperCase()}</h1>
        <p>Capital: {capital}</p>
        <p>Population: {population.toLocaleString()}</p>
        <p>Languages: {langNames.join(', ')}</p>
      </div>
      <div>
        <img src = {flag} alt = {name} /> 
      </div>
    </div>)
    }

 )
  }
  render() {
    console.log('I am the render and i WILL BE THE SECOND TO BE EXECUTED')
    return (
      <>
      <header style ={{textAlign:'center'}}>
      <p>{this.state.currentUser}</p>
      <h1>World Countries Data </h1>
      <h2>
        Number of countries: {this.state.countries.length}
      </h2>
      </header>
      
      <div className="countries">
        {this.renderCountry()}
      </div>
      </>
     
    )
  }
}



export default App;


