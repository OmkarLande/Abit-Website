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
        <div className='fixed z-10 flex items-center justify-between p-2 px-6 py-4 border-2 rounded-full shadow-md top-5 md:top-8 left-4 right-4 bg-black/50 backdrop-blur-md border-white/20 md:px-16 md:left-36 md:right-36'>
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
