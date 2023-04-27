import Footer from "../Footer"
import Navbar from "../Navbar"

const MakroAlphaSolusindoDetailPage = (props) => {
    return (
        <>
            <div className={props.darkMode ? 'dark' : ''}>
                <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
                Test CMS DETAIL
                <Footer/>
            </div>
        </>
    )
}

export default MakroAlphaSolusindoDetailPage 