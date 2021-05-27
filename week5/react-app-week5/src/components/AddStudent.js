import React from 'react'


class AddStudent extends React.Component {
    state = {
        firstName:'',
        lastName:'',
        country:'',
        gender:'',
        skills:{
          html:'',
          css:'',
          js:'',
          react:''
        },
        motivation:'',
        course:''
      }
      handleChange = (e) => {
        if(e.target.type === 'checkbox'){
          this.setState({
            skills:{...this.state.skills, [e.target.name]:e.target.value}
          })
    
        } else {
          this.setState({[e.target.name]:e.target.value})
        }
    
      }

      handleSubmit = (e) => {
      e.preventDefault()
        this.props.addStudent(this.state)
      }
    
    render () {
        return (<form onSubmit = {this.handleSubmit}>

        <div>
        <input
          type='text' 
          name='firstName'
          onChange = {this.handleChange}
          value ={this.state.firstName} placeholder='First Name' />
        </div>
        <div>
          <input 
          type="text" 
          name="lastName"
          onChange = {this.handleChange}
          placeholder='Last Name' value = {this.state.lastName} />
        </div>
        <div>
          <input 
          type="text" 
          name="country"
          onChange = {this.handleChange}
          placeholder='Country' value = {this.state.country} />
        </div>
        <div>
          <input
          name='gender'
          value = 'female'
          onChange = {this.handleChange} type='radio' id="female"/> <label htmlFor='female'>Female</label> <br />
          <input 
          name='gender'
          value = 'male'
          onChange = {this.handleChange} type='radio' id="male"/> <label htmlFor='male'>Male</label> <br />
          <input 
          name='gender'
          value = 'other'
          onChange = {this.handleChange} type='radio' id="other"/> <label htmlFor='other'>Other</label>
 
        </div>
        <div>
          <p>What course do you like to attend?</p>
          <select name='course' onChange = {this.handleChange}>
            <option>JavaScript</option>
            <option>Python</option>
            <option>React</option>
          </select>
        </div>
        <div>
        <p>Select your skills</p>
          <div>
          <input
           onChange = {this.handleChange}  type='checkbox'
           name='html'
           value ='HTML'
           id="html" /> <label htmlFor='html'>HTML</label>
          </div>
          <div>
          <input 
          onChange = {this.handleChange}
          name='css'
           type='checkbox'  value ='CSS' id="css" /> <label htmlFor='css'>CSS</label>
          </div>
          <div>
          <input   onChange = {this.handleChange} 
             name='js'
          type='checkbox'  value ='JavaScript' id="js" /> <label htmlFor='js'>JavaScript</label>
          </div>
          <div>
          <input 
          onChange = {this.handleChange} 
             name='react'  type='checkbox'  value ='React' id="react" /> <label htmlFor='react'>React</label>
          </div>
          <div>
            <textarea onChange = {this.handleChange} name="motivation" cols='80' rows='10' value = {this.state.motivation}>Write your motivation ...</textarea>
          </div>
        </div>
          <button>Submit</button>
        </form>)
    }
}

export default AddStudent