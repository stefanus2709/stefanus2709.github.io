import Footer from "../Footer"
import Navbar from "../Navbar"
import ExperienceContent from "./ExperienceContent"

const ProjectPage = (props) => {
    console.log(props)
    return (
        <div>
            <Navbar/>
            <ExperienceContent/>
            <Footer/>
        </div>
    )
}

export default ProjectPage