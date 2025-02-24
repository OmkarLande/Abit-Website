import React, { useState } from 'react';
import logonav from '../images/LogoWhite.svg';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Events", link: "/" },
        { name: "Team", link: "/" },
        { name: "More", link: "/" },
        {}
    ];
    let [open, setOpen] = useState(false);
    let [moreOpen, setMoreOpen] = useState(false);

    return (
        <div className='fixed z-10 flex items-center justify-between px-6 py-4 border-2 rounded-full shadow-md top-5 md:top-8 left-4 right-4 bg-black/50 backdrop-blur-md border-white/20 md:px-16 md:left-36 md:right-36'>
            <div className='flex items-center justify-between w-full'>
                <Link to="/" className="flex items-center ">
                    <img
                        src={logonav}
                        alt="ABIT Logo"
                        width={120}
                        height={40}
                        className="w-auto h-8"
                    />
                </Link>

                <div className="items-center hidden gap-8 md:flex">
                    {Links.map((link) => 
                        link.name === "More" ? (
                            <div className="relative" key={Date.now() + Math.random()}>
                                <button 
                                    className=" text-white transition-all nav-link relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-btnblue after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-btnblue flex items-center gap-1 "
                                    style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}
                                    onClick={() => setMoreOpen(!moreOpen)}
                                >
                                    {link.name}
                                    {moreOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>

                                {moreOpen && (
                                    <div className="absolute left-0 w-40 mt-2 bg-white bg-opacity-100 border rounded-lg shadow-lg text-bgcolor border-white/20 bg-black/80 backdrop-blur-md">
                                        <Link
                                            to="/attendance"
                                            className="block px-4 py-2 transition-all nav-link relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-btnblue after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-btnblue"
                                            onClick={() => setMoreOpen(false)}
                                        >
                                            Attendance
                                        </Link>
                                        <Link
                                            to="/faculty"
                                            className="block px-4 py-2 transition-all nav-link relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-btnblue after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-btnblue"
                                            onClick={() => setMoreOpen(false)}
                                        >
                                            Faculty
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={Date.now() + Math.random()}
                                href={link.href}
                                className="text-white transition-all nav-link relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-btnblue after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-btnblue flex items-center gap-1"
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                </div>


                <button className="text-white md:hidden" style={{ backgroundColor: "transparent", border: "none" }} onClick={() => setOpen(!open)}>
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {open && (
                <div className="absolute left-0 right-0 p-4 mt-2 bg-white bg-opacity-100 border md:hidden top-full backdrop-blur-md rounded-2xl border-white/20">
                    {Links.map((link) =>
                        link.name === "More" ? (
                            <div key="mobile-more">
                                <button
                                    className="top-1 w-full text-bgcolor transition-all nav-link relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-btnblue after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-btnblue flex items-center gap-1"
                                    style={{ backgroundColor: "transparent", border: "none" }}
                                    onClick={() => setMoreOpen(!moreOpen)}
                                >
                                    {link.name} {moreOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>

                                {moreOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        <Link
                                            to="/attendance"
                                            className="block py-2 text-bgcolor transition-all nav-link relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-btnblue after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-btnblue"
                                            onClick={() => {
                                                setMoreOpen(false);
                                                setOpen(false);
                                            }}
                                        >
                                            Attendance
                                        </Link>
                                        <Link
                                            to="/faculty"
                                            className="block py-2 text-bgcolor transition-all nav-link relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-btnblue after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-btnblue"
                                            onClick={() => {
                                                setMoreOpen(false);
                                                setOpen(false);
                                            }}
                                        >
                                            Faculty
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={Date.now() + Math.random()}
                                to={link.link}
                                className="block py-2 text-bgcolor transition-all nav-link relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-btnblue after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-btnblue"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                </div>
            )}
        </div>
    )
}

export default Navbar;

// import React, { useState } from 'react';
// import logonav from '../images/LogoWhite.svg';

// const Navbar = () => {
//     let Links = [
//         { name: "Home", link: "/" },
//         { name: "Events", link: "/" },
//         { name: "Team", link: "/" },
//         { name: "More", link: "/" },
//         {}
//     ];
//     let [open, setOpen] = useState(false);

//     return (
//         <div className='shadow-md fixed top-5 left-10 right-10 bg-[#2d2d2d] rounded-full border-solid border-2 border-white px-4 py-1 flex items-center justify-between z-10'>
//             <div className='items-center justify-between w-full py-0 md:flex md:px-10 px-7'>
//                 <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
//                     <span className='pt-2 mr-1 text-3xl text-indigo-600'></span>
//                     <img src={logonav} alt="" />
//                 </div>

//                 <div onClick={() => setOpen(!open)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
//                     <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
//                 </div>

//                 <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#2d2d2d] md:z-auto z-[-1] right-0 mr-100 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'right-800 ' : 'right-[-1000px]'}`}>
//                     {Links.map((link) => (
//                         link.name === "More" ? (
//                             <li key={link.name} className='relative text-xl md:ml-8 md:my-0 my-7'>
//                                 <div className='group'>
//                                     <a href={link.link} className='text-white hover:text-[#136ca3] duration-500'>{link.name}</a>

//                                 </div>
//                             </li>
//                         ) : (
//                             <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
//                                 <a href={link.link} className='text-white hover:text-[#136ca3]  duration-500'>{link.name}</a>
//                             </li>
//                         )
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar;



