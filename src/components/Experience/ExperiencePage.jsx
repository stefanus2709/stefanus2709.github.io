import Footer from "../Footer"
import Navbar from "../Navbar"
import ExperienceContent from "./ExperienceContent"

const ProjectPage = (props) => {
    return (
        <>
            <div className={props.darkMode ? 'dark' : ''}>
                <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
                <ExperienceContent/>
                <Footer/>
            </div>
        </>
    )
}

export default ProjectPage