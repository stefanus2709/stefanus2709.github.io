import myFace from '../images/my-face.jpg';
import myFace2 from '../images/my-face2.jpeg';

const ContactContent = () =>{
    return (
        <div className="hero min-h-screen dark:bg-gray-800 bg-white dark:text-gray-400 text-black">
            <div className="hero-content flex-col lg:flex-row">
                <img src={myFace2} className="max-w-sm mask mask-hexagon-2" alt='stefanuslikardi'/>
                <div className='ml-4'>
                    <p className="font-mono phone:text-lg sm:text-2xl md:text-3xl xl:text-6xl font-bold">Contact Me At</p>
                    <div className='ml-2 flex flex-row flex-wrap gap-1 py-1'>
                        <svg width={'20px'} height={'20px'} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
                        <p>Stefanus Likardi</p>
                    </div>
                    <div className='ml-2 flex flex-row flex-wrap gap-1 py-1'>
                        <svg width={'20px'} height={'20px'} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 -31.5 256 256"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077 0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"/><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837-27.026 25.798v98.91Z"/><path fill="#EA4335" d="m58.182 93.14-4.174-38.647 4.174-36.989L128 69.868l69.818-52.364 4.669 34.992-4.669 40.644L128 145.504z"/><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"/><path fill="#C5221F" d="m0 49.504 26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"/></svg>
                        <p>stefanuslikardi@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContent