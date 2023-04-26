import Navbar from "../Navbar"
import HomeProject from "./HomeProject"
import HomeContent from "./HomeContent"
import Footer from "../Footer"

const HomePage = (props) => {
    console.log(props)
    return (
        <>
            <Navbar/>
            <HomeContent/>
            <HomeProject/>
            <Footer/>
        </>
    )
}

export default HomePage