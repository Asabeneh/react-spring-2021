import React, {useState, useEffect, useRef} from 'react'
import useFetch from './components/useFetch'
import Header from './components/Header'
import axios from 'axios'
import './App.css';

// useEffect -> React Life Cycle -> Mount, Update, Unmount

const App = () => {
  const inputFirsName = useRef(null);
  const inputLastName = useRef(null);
  const inputCountry = useRef(null);
  const data = useFetch('https://restcountries.eu/rest/v2/all')
 
  // const [countries, setCountries] = useState([])

  // const fetchData = async () => {
  //   const url = 'https://restcountries.eu/rest/v2/all'
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setCountries(data)
  // }

  // const fetchData = async () => {
  //   const url = 'https://restcountries.eu/rest/v2/all'
  //   const response = await axios.get(url)
  //   setCountries(response.data)
    
  // }
 
  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const onButtonClick = () => {
  //   console.log(inputEl.current.value)
  //   // `current` points to the mounted text input element
  //   inputEl.current.focus();
  // };
const onSubmit = (e) => {
  e.preventDefault()
  let firstName = inputFirsName.current.value
  let lastName = inputLastName.current.value
  let country= inputCountry.current.value
  console.log({firstName, lastName, country})

}

  const renderCountries = (data) => {
    return data.map(({name, capital, population, flag, languages}) => 
<div className="country">
        <div>
        <div>
       

        
       
        </div>
          <h1>{name.toUpperCase()}</h1>
          <p>{capital}</p>
          <p>{population}</p>
        </div>
        <div>
        <img src = {flag} alt = {name + ' flag'} />

        </div>
      </div>)
  }

  return (
    <div>
     <h1>I am an App</h1>
     <form onSubmit = {onSubmit}>
     <input 
      ref={inputFirsName}
      type="text" 
      placeholder='First Name'
      
      /> 
     <input 
     ref={inputLastName} 
     type="text"
     placeholder='Last name'
      /> 
     <input 
     ref={inputCountry} 
     type="text"
     placeholder = 'Country' />
     <button>Submit</button> 
     </form>
     
  
     <br />
     <br />
     <br />
      {/* <button onClick={onButtonClick}>Focus the input</button> */}
    


<div>
  <p>The number of countries {data.length}</p>
  <div className='countries'>
  {renderCountries(data)}

  </div>
 
</div>

        
</div>
   
  )
}

export default App;
