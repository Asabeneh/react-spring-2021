import React, {useState} from 'react'
const AddStudents = () => {
    const initialState = {
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
        touched:{
          firstName:false,
          lastName:false
        }
      }
    
      const [formData, setFormData] = useState(initialState)
      const onChange = (e) => {
        const {name, value, type} = e.target
        if(type === 'checkbox'){
          setFormData({...formData, skills:{...formData.skills, [name]:value}
          })
    
        } else {
          setFormData({...formData, [name]:value})
        }
      }
    
      const onBlur = (e) => {
        const {name} = e.target
       
        setFormData({...formData, touched:{...formData.touched, [name]:true}})
      }
    
      const validate = () => {
        const errors = {
          firstName:'',
          lastName:'',
          country:'',
          email:''
        }
    
        if(formData.touched.firstName == true && formData.firstName.length > 8){
          errors.firstName = 'Fist name is too long'
        }
    
        if(formData.touched.firstName == true && formData.firstName.length <= 2){
          errors.firstName = 'First name is too SHORT'
        }
    
        if(formData.touched.lastName== true && formData.lastName.length > 8){
          errors.lastName= 'Last name is too long'
        }
    
        if(formData.touched.lastName== true && formData.lastName.length <= 2){
          errors.lastName= 'Last name is too SHORT'
        }
    
        return errors
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
          // this.props.addStudent(this.state)
        }
      console.log(formData)
      console.log()
    
      const errors = validate()
    return (
        <form onSubmit = {onSubmit}>

<div className='form-group'>
<label htmlFor='firstName'>First Name</label>
<input
  type='text' 
  name='firstName'
  onBlur = {onBlur}
  onChange = {onChange}
  value ={formData.firstName} placeholder='First Name' />
    <p style ={{color:'red'}}>{errors.firstName}</p>
</div>
<div className='form-group'>
<label htmlFor='lastName'>Last Name</label>
  <input 
  type="text" 
  name="lastName"
  onBlur = {onBlur}
  onChange = {onChange}
  placeholder='Last Name' value = {formData.lastName} />
    <p style ={{color:'red'}}>{errors.lastName}</p>

</div>
<div className='form-group'>
  <input 
  type="text" 
  name="country"
  onChange = {onChange}
  placeholder='Country' value = {formData.country} />
</div>
<div className=''>
<p>Gender</p>
  <input
  name='gender'
  value = 'female'
  onChange = {onChange} type='radio' id="female"/> <label htmlFor='female'>Female</label> <br />
  <input 
  name='gender'
  value = 'male'
  onChange = {onChange} type='radio' id="male"/> <label htmlFor='male'>Male</label> <br />
  <input 
  name='gender'
  value = 'other'
  onChange = {onChange} type='radio' id="other"/> <label htmlFor='other'>Other</label>

</div>
<div>
  <p>What course do you like to attend?</p>
  <select name='course' onChange = {onChange}>
    <option>JavaScript</option>
    <option>Python</option>
    <option>React</option>
  </select>
</div>
<div>
<p>Select your skills</p>
  <div>
  <input
   onChange = {onChange}  type='checkbox'
   name='html'
   value ='HTML'
   id="html" /> <label htmlFor='html'>HTML</label>
  </div>
  <div>
  <input 
  onChange = {onChange}
  name='css'
   type='checkbox'  value ='CSS' id="css" /> <label htmlFor='css'>CSS</label>
  </div>
  <div>
  <input   onChange = {onChange} 
     name='js'
  type='checkbox'  value ='JavaScript' id="js" /> <label htmlFor='js'>JavaScript</label>
  </div>
  <div>
  <input 
  onChange = {onChange} 
     name='react'  type='checkbox'  value ='React' id="react" /> <label htmlFor='react'>React</label>
  </div>
  <div>
    <textarea onChange = {onChange} name="motivation" cols='80' rows='10' value = {formData.motivation}>Write your motivation ...</textarea>
  </div>
</div>
  <button>Submit</button>
</form>
    )
}

export default AddStudents
