import Footer from "../Footer";
import Navbar from "../Navbar";
import dashboard from "../images/easybengkel-dashboard.png";
import product from "../images/easybengkel-product.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MakroAlphaSolusindoDetailPage = (props) => {
    return (
        <>
            <div className={props.darkMode ? 'dark' : ''}>
                <Navbar darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
                <div className='p-10 dark:bg-gray-800 bg-white dark:text-gray-400 text-black'>
                    <div className='text-start'>
                        <p className='phone:text-lg sm:text-2xl md:text-3xl xl:text-6xl font-bold mb-4'>EasyBengkel</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>Highlights</p>
                        <div className="pt-2 m-auto text-center">
                            <Carousel className="w-1/2 phone:w-11/12 hover:cursor-pointer items-center text-center m-auto" dynamicHeight={true}>
                                <div>
                                    <img className="item-center rounded-lg" src={dashboard} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                                <div>
                                    <img className="item-center rounded-lg" src={product} alt="nutrifoodDeveloper"/>
                                    {/* <p className="legend">Developer Team at Nutrifood</p> */}
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>Project Description</p>
                        <p className="italic">
                            EasyBengkel is a web based application can help manage every activity that commonly occurs in a workshop, such as recording inventory, sales, purchases, supplier data, as well mechanical data.
                            This application is also the topic of my thesis at the end of college with my thesis partner.
                        </p>
                    </div>
                    <div className="mb-5">
                        <p className='phone:text-[12px] sm:text-xs md:text-base xl:text-xl font-bold'>App Function</p>
                        <ul className="list-disc pl-8 italic">
                            <li>Dashboard</li>
                            <li>Manage Product Data</li>
                            <li>Manage Quotation (Sale Transaction) Data</li>
                            <li>Manage Purchase Order (Supply Transaction) Data</li>
                            <li>Manage Product Category Data</li>
                            <li>Manage Product Brand Data</li>
                            <li>Manage Product Vehicle Type Data</li>
                            <li>Manage Supplier Data</li>
                            <li>Manage Mechanic Data</li>
                            <li>Record Mechanic Taken Salary</li>
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