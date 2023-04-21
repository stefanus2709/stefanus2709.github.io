import myFace from './images/my-face.jpg';

const HomeContent = () => {
    return (
        <div className="mt-8">
            <div className="chat chat-start p-5">
                <div className='mt-auto'>
                    <div className="avatar online">
                        <div className="w-20 rounded-full">
                            <img src={myFace} />
                        </div>
                    </div>
                </div>
                
                <div className="transition chat-bubble w-8/12 p-10 hover:duration-700 ease-in-out">
                    <p className="font-mono text-5xl">Hello, I'm Stefanus Likardi</p>
                    <p className="font-mono text-3xl">Fresh Graduate Software Engineer</p>
                    <br/>
                    <p className="font-mono">
                        Have almost 2 years of experience working on web development field.
                        Passionate in computer science and technology field and seeking for opportunity to improve and increase my skill and experience in those field.
                    </p>
                    {/* <br/> */}
                    {/* <div className="text-end">
                        Press <kbd className="kbd kbd-sm">F</kbd> to pay respects.
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HomeContent