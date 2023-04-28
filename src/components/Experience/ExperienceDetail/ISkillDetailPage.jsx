import Footer from "../../Footer";
import Navbar from "../../Navbar";
import iskill1 from "../../images/iskill1.png";
import iskill2 from "../../images/iskill2.png";
import iskill3 from "../../images/iskill3.png";
import iskill4 from "../../images/iskill4.png";
import iskill5 from "../../images/iskill5.png";
import iskill6 from "../../images/iskill6.png";
import iskill7 from "../../images/iskill7.png";
import iskill8 from "../../images/iskill8.png";
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
                            <li>ISkill</li>
                        </ul>
                    </div>
                    <div className='text-start'>
                        <p className='phone:text-lg sm:text-2xl md:text-3xl xl:text-6xl font-bold mb-4'>ISKILL</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>Highlights</p>
                        <div className="pt-2 m-auto text-center">
                            <Carousel className="w-1/2 phone:w-11/12 hover:cursor-pointer items-center text-center m-auto" dynamicHeight={true} showStatus={false}>
                                <div>
                                    <img className="item-center rounded-lg" src={iskill1} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={iskill2} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={iskill3} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={iskill4} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={iskill5} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={iskill6} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={iskill7} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={iskill8} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>Project Description</p>
                        <p className="italic">
                            ISkill is a learning website application that my friends and I worked on as a campus assignment. Even though this application has not been optimized perfectly, this project managed to give a good score for me and the team.
                        </p>
                    </div>
                    <div className="mb-5">
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>App Function</p>
                        <ul className="list-disc pl-8 italic">
                            <li>Login</li>
                            <li>Register</li>
                            <li>Buy Course</li>
                            <li>View Course Dashboard</li>
                            <li>View Course Video</li>
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