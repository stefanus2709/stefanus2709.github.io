import Footer from "../Footer"
import Navbar from "../Navbar"
import developer2 from "../images/developer2.jpeg";
import developer3 from "../images/developer3.jpeg";
import developer4 from "../images/developer4.jpeg";
import developer5 from "../images/developer5.jpeg";
import intern from "../images/intern.jpeg";
import intern2 from "../images/intern2.jpeg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const NutrifoodIndonesiaDetailPage = (props) => {
    return (
        <>
            <div className={props.darkMode ? 'dark' : ''}>
                <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
                <div className='p-10 dark:bg-gray-800 bg-white dark:text-gray-400 text-black'>
                    <div className='text-start'>
                        <p className='phone:text-lg sm:text-2xl md:text-3xl xl:text-6xl font-bold mb-4'>PT Nutrifood Indonesia</p>
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl'>Application Developer Internship (Mar 2022 - Mar 2023)</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>Highlights</p>
                        <div className="pt-2 m-auto text-center">
                            <Carousel className="w-1/2 phone:w-11/12 hover:cursor-pointer items-center text-center m-auto" dynamicHeight={true}>
                                <div>
                                    <img className="item-center rounded-lg" src={developer2} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Conduct Meeting With Developer Team</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={developer3} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={developer4} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={intern2} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={intern} alt="nutrifoodIntern"/>
                                    {/* <p className="legend">Me With Other Intern's</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={developer5} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>Job Description</p>
                        <ul className="list-disc pl-8 italic">
                            <li>Improve company authentication application, from frontend and backend side based on requirements given</li>
                            <li>Implement CI/CD and Docker container for company applications</li>
                            <li>Do database migration for multiple company applications, by make changes to the database connections</li>
                            <li>Conduct technology research and implement it on company environment</li>
                            <li>Implement autorestart service feature on company applications</li>
                            <li>Fixing bugs and maintain company applications</li>
                        </ul>
                    </div>
                    <div>
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl mb-1 font-bold'>Things Learned</p>
                        <div className="flex flex-row flex-wrap gap-2 italic font-medium">
                            <div className="badge badge-success">Ruby On Rails</div>
                            <div className="badge badge-success">Capistrano</div>
                            <div className="badge badge-success">SQL Server</div>
                            <div className="badge badge-success">Git</div>
                            <div className="badge badge-success">Linux CLI</div>
                            <div className="badge badge-success">Docker</div>
                            <div className="badge badge-success">CI/CD</div>
                            <div className="badge badge-success">Cloud Platform (AWS, GCP)</div>
                            <div className="badge badge-success">Web Development (HTML, CSS, & Javascript)</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default NutrifoodIndonesiaDetailPage