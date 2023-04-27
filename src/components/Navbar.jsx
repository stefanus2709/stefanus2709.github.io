import { Link } from "react-router-dom"

const Navbar = (props) => {
    return (
        <div className="navbar text-black bg-gray-200 dark:bg-neutral dark:text-gray-400">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/" className='visited:bg-neutral active:bg-base-100 rounded-box'>Home</Link></li>
                    <li><Link to="/experience" className='visited:bg-neutral active:bg-base-100 rounded-box'>Experience</Link></li>
                </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">SL</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className='visited:bg-neutral active:bg-base-100 rounded-box'>Home</Link></li>
                    <li><Link to="/experience" className='visited:bg-neutral active:bg-base-100 rounded-box'>Experience</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <button onClick={props.toggleDarkMode} >
                    a
                </button> */}
                
                {props.darkMode ?
                    <input type="checkbox" className="toggle bg-gray-200" onChange={props.toggleDarkMode} checked/> :
                    <input type="checkbox" className="toggle bg-gray-200" onChange={props.toggleDarkMode}/>
                }
            </div>
        </div>
    )
}

export default Navbar