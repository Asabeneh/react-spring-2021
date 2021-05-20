import logo from './logo.svg';
import './App.css';
import React from 'react'


const colors = [
  "rgb(25,154,216)",
  "rgb(196,4,114)",
  "rgb(180,27,255)",
  "rgb(60,33,191)",
  "rgb(34,116,246)",
  "rgb(140,212,38)",
  "rgb(238,4,181)",
  "rgb(159,77,22)",
  "rgb(9,189,57)",
  "rgb(43,114,187)",
  "rgb(118,186,97)",
  "rgb(181,69,131)",
  "rgb(120,173,7)",
  "rgb(12,36,79)",
  "rgb(222,71,163)",
  "rgb(133,121,111)",
  "rgb(89,176,171)",
  "rgb(48,159,231)",
  "rgb(3,132,250)",
  "rgb(3,181,69)",
  "rgb(48,209,103)",
  "rgb(154,129,248)",
  "rgb(157,203,10)",
  "rgb(32,245,27)",
  "rgb(58,61,118)",
  "rgb(225,112,85)",
  "rgb(138,83,191)",
  "rgb(74,205,250)",
  "rgb(71,14,238)",
  "rgb(129,164,18)",
  "rgb(130,125,190)",
  "rgb(90,144,230)",
  "rgb(40,64,239)",
  "rgb(206,76,82)",
  "rgb(97,21,156)",
  "rgb(59,35,81)",
  "rgb(200,120,75)",
  "rgb(47,65,109)",
  "rgb(202,254,26)",
  "rgb(123,108,102)",
  "rgb(35,19,111)",
  "rgb(41,191,180)",
  "rgb(213,108,3)",
  "rgb(80,105,120)",
  "rgb(32,60,93)",
  "rgb(112,55,42)",
  "rgb(141,71,59)",
  "rgb(22,29,184)",
  "rgb(214,126,161)",
  "rgb(56,107,55)"
]

class App extends React.Component {
  state = {
  count:0,
  mood:'',
  name:'Asabeneh',
  color:'white',
  value:'',
  students:[]
  }
  addOne = () => {
    this.setState({count:this.state.count + 1})
  }
  minusOne = () => {
    this.setState({count:this.state.count - 1})
  }
  makeMeHappy = () => {
    this.setState({mood:'Happy'})
  }
  pleaseDoNotLeave = () => {
    this.setState({mood:'Please do not leave'})
  }
  changeName = () => {
    let name =  this.state.name == 'Asabeneh' ? 'Eyob' : 'Asabeneh'
    this.setState({name})
  }
  changeColor = () => {
    let index = Math.floor(Math.random() * colors.length)
    let color = colors[index]
    this.setState({color})
  }
  handleChange = (e) => {
    this.setState({value:e.target.value})
  }

  addStudent = () => {
    this.setState({students:[...this.state.students, this.state.value]})
  }
  render () {
  console.log(this.state)
    return  (
      <div className="App" style = {{
        background:this.state.color,
        minHeight:'100vh'
      }}>
      <h1>Count:{this.state.count}</h1>
      <p>{this.state.mood}</p>
      <p>{this.state.name}</p>

      <button onClick = {this.addOne}>Add+1</button>
      <button onClick = {this.minusOne}>Minus-</button>
      <button onMouseEnter = {this.makeMeHappy } onMouseLeave = {this.pleaseDoNotLeave}>Make Me Happy</button>
      <button onClick = {this.changeName}>Change Name</button>
      <button onClick = {this.changeColor}>Change Background Color</button>

      <br />
      <p>{this.state.value}</p>
      <h2>Number of students {this.state.students.length}</h2>
      <input 
      onChange = {this.handleChange} 
      type='text' 
      value = {this.state.value}
      name='firstName' />

  
      <button onClick = {this.addStudent}>Add Student</button>

      {
        this.state.students.map((student) => {
          return <li>{student}</li>
        })
      }

    </div>
    )

  }

}






export default App;
