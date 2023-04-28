import Footer from "../../Footer";
import Navbar from "../../Navbar";
import cmsapp1 from "../../images/cms1.png";
import cmsapp2 from "../../images/cms2.png";
import cmsapp3 from "../../images/cms3.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom"

const MakroAlphaSolusindoDetailPage = (props) => {
    return (
        <>
            <div className={props.darkMode ? 'dark' : ''}>
                <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
                <div className='p-10 dark:bg-gray-800 bg-white dark:text-gray-400 text-black'>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link to={'/experience'}>Experience</Link></li> 
                            <li>PT Makro Alpha Solusindo</li>
                        </ul>
                    </div>
                    <div className='text-start'>
                        <p className='phone:text-lg sm:text-2xl md:text-3xl xl:text-6xl font-bold mb-4'>PT Makro Alpha Solusindo</p>
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl'>Full Stack Developer Freelance (Aug 2022 - Apr 2023)</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>Highlights</p>
                        <div className="pt-2 m-auto text-center">
                            <Carousel className="w-1/2 phone:w-11/12 hover:cursor-pointer items-center text-center m-auto" dynamicHeight={true} showStatus={false}>
                                <div>
                                    <img className="item-center rounded-lg" src={cmsapp1} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={cmsapp2} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={cmsapp3} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>Job Description</p>
                        <ul className="list-disc pl-8 italic">
                            <li>Designed cms application based on company requirements</li>
                            <li>Developed cms application based on company requirements</li>
                            <li>Maintained company cms application</li>
                            <li>Refactoring code and fixing application bugs</li>
                        </ul>
                    </div>
                    <div>
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl mb-1 font-bold'>Technology Used</p>
                        <div className="flex flex-row flex-wrap gap-2 italic font-medium">
                            <div className="badge badge-success">Laravel</div>
                            <div className="badge badge-success">Bootstrap</div>
                            <div className="badge badge-success">MySQL</div>
                            <div className="badge badge-success">Git</div>
                            <div className="badge badge-success">Web Development (HTML, CSS, & Javascript)</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default MakroAlphaSolusindoDetailPage 