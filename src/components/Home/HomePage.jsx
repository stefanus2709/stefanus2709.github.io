import Navbar from "../Navbar"
import HomeProject from "./HomeProject"
import HomeContent from "./HomeContent"
import Footer from "../Footer"

const HomePage = (props) => {
    return (
        <>
            <div className={props.darkMode ? 'dark' : ''}>
                <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
                <HomeContent/>
                <HomeProject/>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage