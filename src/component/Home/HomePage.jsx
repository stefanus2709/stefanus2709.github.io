import Navbar from "../Navbar"
import HomeProject from "./HomeProject"
import HomeContent from "./HomeContent"
import Footer from "../Footer"

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <HomeContent/>
            </div>
            <div className='p-10'>
                <p className="font-sans font-bold text-center text-4xl mb-10">Some of My Works</p>
                <HomeProject/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage