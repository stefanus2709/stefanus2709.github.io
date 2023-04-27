import React from 'react';
import iskill from '../images/ISKILL-HD.png';
import easybengkel from '../images/EasyBengkel.png';
import cmsapp from '../images/CMS_MAS.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeProject = () => {
    return (
        <div className='p-10 dark:bg-gray-800 bg-white dark:text-gray-400 text-black'>
            <p className="font-sans font-bold text-center phone:text-lg sm:text-2xl md:text-3xl xl:text-6xl mb-10">
                Some of My Works
            </p>
            <Carousel className="transition ease-in-out duration-700 sm:w-4/12 phone:w-11/12 m-auto hover:cursor-pointer 
            hover:scale-105 hover:duration-700 hover:ease-in-out shadow-2xl dark:shadow-black shadow-slate-400" 
            autoPlay={true} infiniteLoop={true} showIndicators={true} showThumbs={false} 
            showArrows={false} showStatus={false} swipeable={false}> 
                <div>
                    <img src={iskill} alt='iskill' className="rounded-md" />
                </div>
                <div>
                    <img src={easybengkel} alt='easybengkel' className="rounded-md" />
                </div>
                <div>
                    <img src={cmsapp} alt='cmsapp' className="rounded-md" />
                </div>
            </Carousel>
        </div>
    )
}

export default HomeProject