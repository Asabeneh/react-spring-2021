const Contacts = () => {
    return (
        <div id="contacts">
            <h1>Contact Us</h1>
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
            <label htmlFor="message">Leave your message</label> <br />
            <textarea name="message" id="message" cols="80" rows="10"></textarea>
        </div>
    
        <div className="form-group">
            <input type="submit" value='Submit' className="btn" />
        </div>
        </form>
    
        </div>
       
    
    )
    }

    export default Contacts