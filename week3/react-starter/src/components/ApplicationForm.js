



const ApplicationForm = () => {
    return (
     <div id="apply">
     <h1>Application Form</h1>
     <form>
             <div className="form-group">
             <label htmlFor="firstname">First Name</label>
             <input type="text" id="firstname" placeholder="Your name" />
         </div>
         <div className="form-group">
             <label htmlFor="lastname">Last Name</label>
             <input type="text" id="lastname" placeholder="Your name" />
         </div>
 
         <div className="form-group">
             <label htmlFor="company">Company</label>
             <input type="text" id="company" placeholder="Your companyname" />
         </div>
 
         <div className="form-group">
             <label htmlFor="email">Email</label>
             <input type="email" id="email" placeholder="Your email" />
         </div>
   
 <div className="form-group">
     <label htmlFor="dateofbirth">Date of birth</label>
     <input type="date" id="dateofbirth" />
 
 </div>
 <div className="form-group">
     <label htmlFor="color">Your favorite Color</label>
     <input id="color" type="color" />
 </div>
 <div className="form-group">
     <p>What are your skills</p>
     <input type="checkbox" id="html" /> <label htmlFor="html">HTML</label> <br />
     <input type="checkbox" id="css" /> <label htmlFor="css">CSS</label> <br />
     <input type="checkbox" id="js" /> <label htmlFor="js">JavaScript</label> <br />
     <input type="checkbox" id="react" /> <label htmlFor="react">React</label> <br />
     <input type="checkbox" id="reduc" /> <label htmlFor="reduc">Redux</label>
 </div>
 <div className="form-group">
     <p>Gender</p>
     <input type="radio" id='female' name='gender' /> <label htmlFor="female">Female</label> <br />
     <input type="radio" id='male' name='gender' /> <label htmlFor="male">Male</label> <br />
     <input type="radio" id='other' name='gender' /> <label htmlFor="other">Other</label>
 </div>
 <div className="form-group">
     <p>Select your country</p>
     <select name="country" id="country">
         <option value="">-- Select Country --</option>
         <option value="Ethiopia">Ethiopia</option>
         <option value="Eriteria">Eriteria</option>
         <option value="Sudan">Sudan</option>\
         <option value="Kenya">Kenya</option>
 
         <option value="Somalia">Somalia</option>
         <option value="Djibouti">Djibouti</option>
     </select>
 </div>
 <div className="form-group">
     <label htmlFor="message">Leave your message</label> <br />
     <textarea name="message" id="message" cols="80" rows="10"></textarea>
 </div>
 <div className="form-group">
     <input type="file" />
 </div>
 <div className="form-group">
     <input type="checkbox" id='agree' />
     <label htmlFor="agre">
         <small>
             I agreed that all the information I have provided is true and belongs to me.
         </small>
     </label>
 </div>
 <div className="form-group">
     <input type="submit" value='Submit' className="btn" />
 </div>
      
 </form>
 
 </div>
 
    )
 }

 export default ApplicationForm