import myFace from '../images/my-face.jpg';

const HomeContent = () => {
    return (
        <div className="pt-5 dark:bg-gray-800 bg-white">
            <div className="chat chat-start p-5">
                <div className='mt-auto'>
                    <div className="avatar online">
                        <div className="phone:w-10 md:w-20 rounded-full">
                            <img src={myFace} alt='profilePicture'/>
                        </div>
                    </div>
                </div>
                
                <div className="transition ease-in-out duration-700 chat-bubble w-11/12 p-5 
                hover:-translate-y-3 hover:translate-x-3 hover:bg-sky-600 hover:duration-700 hover:ease-in-out
                hover:text-white hover:cursor-pointer dark:hover:bg-sky-500 dark:hover:text-white 
                dark:bg-neutral dark:text-gray-400 text-black bg-gray-200">
                    <p className="font-mono phone:text-lg sm:text-2xl md:text-3xl xl:text-6xl font-bold">
                        Hello, I'm Stefanus Likardi Test Ganti
                    </p>
                    <p className="font-mono phone:text-sm sm:text-lg md:text-xl xl:text-4xl font-bold">
                        Fresh Graduate Software Engineer
                    </p>
                    <br/>
                    <p className="font-mono phone:text-[8px] sm:text-xs md:text-base xl:text-xl">
                        Have almost 2 years of experience working on web development field.<br/>
                        Passionate in computer science and technology field, seeking for opportunity to improve and increase my skill and experience on those field.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeContent