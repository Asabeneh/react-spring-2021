import SocialMediaLinks from './SocialMediaLinks'
const Footer = () =>  {
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let year = new Date ().getFullYear()
    return  (
        <footer>
          <div className="footer-wrapper">
            <SocialMediaLinks />
            <div>
             <p>Copyright &copy; {year} by {firstName} {lastName}</p>
            </div>
          </div>
        </footer>
    )


}

export default Footer