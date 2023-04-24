import React, {useState, useEffect} from 'react';
import myFace from './images/my-face.jpg';

const HomeContent = () => {
    const [keyDown, setKeyDown] = useState(0)
    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, [])
    const detectKeyDown = (e) => {
        if(e.key === "f")
            setKeyDown((prev) => prev + 1)
    }

    return (
        <div className="mt-5">
            <div className="chat chat-start p-5">
                <div className='mt-auto'>
                    <div className="avatar online">
                        <div className="phone:w-10 md:w-20 rounded-full">
                            <img src={myFace} />
                        </div>
                    </div>
                </div>
                
                <div className="transition ease-in-out duration-700 chat-bubble w-11/12 p-5 
                hover:-translate-y-3 hover:translate-x-3 hover:bg-sky-500 hover:duration-700 hover:ease-in-out
                hover:text-white hover:cursor-pointer">
                    <p className="font-mono phone:text-lg sm:text-2xl md:text-5xl font-bold">Hello, I'm Stefanus Likardi</p>
                    <p className="font-mono phone:text-sm sm:text-lg md:text-3xl font-bold">Fresh Graduate Software Engineer</p>
                    <br/>
                    <p className="font-mono phone:text-[8px] sm:text-xs md:text-base">
                        Have almost 2 years of experience working on web development field.<br/>
                        Passionate in computer science and technology field, seeking for opportunity to improve and increase my skill and experience on those field.
                    </p>
                    <br/>
                    <div className="font-mono phone:text-[8px] sm:text-xs md:text-base text-end">
                        Press <kbd id="kbdF" className="kbd kbd-sm">F</kbd> to pay respects.
                        <br/>
                        {keyDown != 0 && `Respected ${keyDown} times.`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent