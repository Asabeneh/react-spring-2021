import Navbar from './Navbar'
const  Header = ()  =>  {
    const title = 'Getting Started React'
    const subtitle = 'A popular JavaScript library'
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let year = new Date ().getFullYear()
       return (<header>
           <div className="header-wrapper">
                <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>Author: {firstName} {lastName}</p>
                <small>Year: {year}</small>
                </div>
                <div>
                    <Navbar />  
                </div>
           </div>
    </header>)
    }
export default Header