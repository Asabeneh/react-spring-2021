import logo from './logo.svg';
import './App.css';
import React from 'react'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
  let index = Math.floor(Math.random() * str.length)
  color += str[index]
  }
  return '#' + color
}


class App extends React.Component {
  state = {
    mood:'Happy',
    count:0,
    color:'purple',
    value:''
  }

  changeBackgroundcolor = () => {
    this.setState({color:hexaColor()})

  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({value:e.target.value})
  }


  render () {
 
    return (
      <div className="App" style ={{background:this.state.color, minHeight:'100vh', color:'white'}}>
       <h1>Getting Started React</h1>
       <p>My state now is {this.state.mood}
       </p>
       <p>Count:{this.state.count}</p>
       <button onClick = {() => this.setState({mood:'super exited'})}>Change Mood</button>
       <button onClick = {
         
         () => this.setState({count:this.state.count + 1})
         
         }>+1</button>
          <button onClick = {
         
         () => this.setState({count:this.state.count - 1})
         
         }>-1</button>
         <button onClick = {this.changeBackgroundcolor}>Change Background</button>
<br />
<p>{this.state.value}</p>
        <input
        onChange = {this.handleChange}
         type='text' 
         value ={this.state.value} placeholder='First Name' />
      
      </div>
    )
  }
}

export default App;
