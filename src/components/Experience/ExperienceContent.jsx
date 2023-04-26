import iskill from '../images/ISKILL-HD.png';
import easybengkel from '../images/EasyBengkel.png';
import cmsapp from '../images/CMS_MAS.png';
import nutrifood from '../images/Nutrifood.png';
import { Link } from "react-router-dom"

const ExperienceContent = () => {
    return (
        <div className='p-10'>
            <div className='text-center'>
                <p className='font-mono phone:text-lg sm:text-2xl md:text-3xl xl:text-6xl font-bold mb-4'>My Experience</p>
                <p className='font-mono phone:text-[12px] sm:text-xs md:text-base xl:text-xl'>Here are some of my previous project and works i've working before</p>
            </div>
            <div className="divider"></div>
            <div className='flex flex-row flex-wrap items-center gap-10'>
                <div className="transition ease-in-out duration-700 card w-96 bg-base-100 shadow-xl hover:cursor-pointer 
                hover:scale-105 hover:duration-700 hover:ease-in-out">
                    <figure><img src={cmsapp} alt="cms_application" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">PT Makro Alpha Solusindo</h2>
                        <p className='font-mono text-[14px]'>Designed, developed, and maintain cms website to help company handle transactions and products data.</p>
                        <div className="card-actions justify-end">
                            <Link className="dark:text-gray-400 text-black">
                                <div className='flex flex-row items-center'>
                                    Details {'>'}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="transition ease-in-out duration-700 card w-96 bg-base-100 shadow-xl hover:cursor-pointer 
                hover:scale-105 hover:duration-700 hover:ease-in-out">
                    <figure><img src={nutrifood} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">PT Nutrifood Indonesia</h2>
                        <p className='font-mono text-[14px]'>Working as Application Developer Intern, to help company maintain and developed their internal applications.</p>
                        <div className="card-actions justify-end">
                            <Link className="dark:text-gray-400 text-black">
                                <div className='flex flex-row items-center'>
                                    Details {'>'}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="transition ease-in-out duration-700 card w-96 bg-base-100 shadow-xl hover:cursor-pointer 
                hover:scale-105 hover:duration-700 hover:ease-in-out">
                    <figure><img src={easybengkel} alt="easybengkel" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">EasyBengkel</h2>
                        <p className='font-mono text-[14px]'>Designed and developed website application to help workshop owner record transaction and maintain product stock.</p>
                        <div className="card-actions justify-end">
                            <Link className="dark:text-gray-400 text-black">
                                <div className='flex flex-row items-center'>
                                    Details {'>'}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="transition ease-in-out duration-700 card w-96 bg-base-100 shadow-xl hover:cursor-pointer 
                hover:scale-105 hover:duration-700 hover:ease-in-out">
                    <figure><img src={iskill} alt="iskill" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-mono">ISKILL</h2>
                        <p className='font-mono text-[14px]'>Designed and developed learning website named ISKILL to provide many learning courses, with my team as a campus project.</p>
                        <div className="card-actions justify-end">
                            <Link className="dark:text-gray-400 text-black">
                                <div className='flex flex-row items-center'>
                                    Details {'>'}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ExperienceContent