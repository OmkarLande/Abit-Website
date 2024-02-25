import React, { useState } from 'react';
import logonav from '../images/LogoWhite.svg';

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Events", link: "/" },
        { name: "Team", link: "/" },
        { name: "More", link: "/" },
        {}
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md fixed top-5 left-10 right-10 bg-[#2d2d2d] rounded-full border-solid border-2 border-white px-4 py-1 flex items-center justify-between z-10'>
            <div className='md:flex items-center justify-between py-0 md:px-10 px-7 w-full'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'></span>
                    <img src={logonav} alt="" />
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#2d2d2d] md:z-auto z-[-1] right-0 mr-100 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'right-800 ' : 'right-[-1000px]'}`}>
                    {Links.map((link) => (
                        link.name === "More" ? (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 relative'>
                                <div className='group'>
                                    <a href={link.link} className='text-white hover:text-[#136ca3] duration-500'>{link.name}</a>

                                </div>
                            </li>
                        ) : (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-white hover:text-[#136ca3]  duration-500'>{link.name}</a>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
