import cmsMasLogin from './images/cms-mas-app.png';
import iskill from './images/iskill.png';

const HomeProject = () => {
    return (
        // <div className="carousel w-full">
        //     <div id="slide1" className="carousel-item duration-700 ease-in-out relative w-full h-fit">
        //         <div className="mockup-window border bg-base-300 w-full">
        //             <p className='text-center font-mono text-2xl'>PT Makro Alpha Solusindo</p>
        //             <div className="flex justify-center px-4 py-4 bg-base-200">
        //                 <img src={cmsMasLogin} className="w-auto" />
        //             </div>
        //         </div>
        //     </div> 
        //     <div id="slide2" className="carousel-item duration-700 ease-in-out relative w-full h-fit">
        //         <div className="mockup-window border bg-base-300 w-full">
        //             <p className='text-center font-mono text-2xl'>ISkill</p>
        //             <div className="flex justify-center px-4 py-4 bg-base-200">
        //                 <img src={iskill} className="w-auto" />
        //             </div>
        //         </div>
        //     </div> 
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
        //     </div> 
        //     <div id="slide4" className="carousel-item relative w-full">
        //         <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        //     </div>
        //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //         <a href="#slide4" className="btn btn-circle" data-carousel-prev>❮</a> 
        //         <a href="#slide2" className="btn btn-circle" data-carousel-next>❯</a>
        //     </div>
        // </div>
        
        <div id="controls-carousel" className="relative w-full" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* <!-- Item 1 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={cmsMasLogin} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src={iskill} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 4 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 5 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default HomeProject