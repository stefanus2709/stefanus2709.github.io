import Navbar from "../Navbar"
import Footer from "../Footer"
import ContactContent from "./ContactContent"

const ContactPage = (props) => {
    return (
        <>
            <div className={props.darkMode ? 'dark' : ''}>
                <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
                <ContactContent/>
                <Footer/>
            </div>
        </>
    )
}

export default ContactPage