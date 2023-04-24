import React from 'react';
import cmsMasLogin from './images/cms-mas-app.png';
import iskill from './images/ISKILL-HD.png';
import easybengkel from './images/EasyBengkel.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeProject = () => {
    return (
        <Carousel className="w-1/3 h-1/4 m-auto" autoPlay={true} infiniteLoop={true} 
        showIndicators={true} showThumbs={false} showArrows={false} showStatus={false}> 
            <div>
                <img src={iskill} className="rounded-md" />
            </div>
            <div>
                <img src={easybengkel} className="rounded-md" />
            </div>
        </Carousel>
    )
}

export default HomeProject