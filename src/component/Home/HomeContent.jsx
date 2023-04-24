import myFace from './images/my-face.jpg';

const HomeContent = () => {
    return (
        <div className="mt-5">
            <div className="chat chat-start p-5">
                <div className='mt-auto'>
                    <div className="avatar online">
                        <div className="w-20 rounded-full">
                            <img src={myFace} />
                        </div>
                    </div>
                </div>
                
                <div className="transition ease-in-out delay-150 chat-bubble w-8/12 p-5 
                hover:-translate-y-3 hover:translate-x-3 hover:bg-sky-500 duration-500 
                hover:text-white hover:cursor-pointer">
                    <p className="font-mono text-5xl font-bold">Hello, I'm Stefanus Likardi</p>
                    <p className="font-mono text-3xl font-bold">Fresh Graduate Software Engineer</p>
                    <br/>
                    <p className="font-mono">
                        Have almost 2 years of experience working on web development field.<br/>
                        Passionate in computer science and technology field, seeking for opportunity to improve and increase my skill and experience on those field.
                    </p>
                    <br/>
                    <div className="font-mono text-end">
                        Press <kbd className="kbd kbd-sm">F</kbd> to pay respects.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent