import logo from './logo.svg';
import './App.css';
import React from 'react'
import AddStudent from './components/AddStudent'

class App extends React.Component {
  state = {
    students:[]
  }
  addStudent = (student) => {
    this.setState({students:[...this.state.students, student]})
  }

  render () {
 
    return (
      <div className="App">
       <div>
       <p>Number of students {this.state.students.length}</p> 
       {
         this.state.students.map((student) => {
           return <div>
             <h1>{student.firstName} {student.lastName}</h1>
             <p>{student.country}</p>
             <p>Gender:{student.gender}</p>
             <p>Course: {student.course}</p>
             <p>Skills:{Object.values(student.skills).map((skill, index) => <li key ={index}>{skill}</li>)}</p>
             <p>Motivation:{student.motivation}</p>
           </div>
         })
       }

       </div>
       
      <AddStudent addStudent = {this.addStudent} />
      
      </div>
    )
  }
}

export default App;
