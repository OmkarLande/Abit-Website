import React from 'react';
import logofooter from '../images/logonav.png';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr className="h-px my-10 bg-transparent border-0" />
      <footer className="py-16 text-white bg-gray-800 flex flex-col items-center font-[Archivo]">
        <section className='w-[90%] max-w-[1068px] flex flex-col md:flex-row md:justify-between md:items-start gap-16'>
          <section className="flex flex-col items-center md:items-start md:w-[746px] gap-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <img src={logofooter} alt="logo" className='w-[150px] md:w-[232px] h-auto' />
              <div className='text-center md:text-left md:ml-8 md:mt-2'>
                <h2 className="text-lg font-medium md:font-normal">Location :</h2>
                <p className="text-gray-300 w-[250px] md:w-[380px] md:text-xl">
                  MCT's Rajiv Gandhi Institute Of Technology, Juhu Versova Link Rd,
                  Versova, Andheri West, Mumbai-400053
                </p>
              </div>
            </div>
            <section className="flex flex-col w-full gap-6 text-center md:flex-row md:text-left">
              <div>
                <p className="text-lg font-medium md:font-normal">Contact : </p>
                <a href="mailto:abitrgit.it@gmail.com" className="text-gray-300 hover:text-white md:text-xl">
                  abitrgit.it@gmail.com
                </a>
              </div>
              <div className='flex justify-center gap-6 text-white md:justify-end md:pl-24'>
                <FaFacebookSquare size={28} />
                <FaInstagram size={28} />
                <FaLinkedin size={28} />
              </div>
            </section>
          </section>
          <section className="flex flex-col gap-10 text-lg text-center md:flex-row md:text-left md:gap-10">
            <div className='flex flex-col gap-4'>
              <a href="#">About Us</a>
              <a href="#">Faculty</a>
              <a href="#">Team</a>
              <a href="#">Attendance</a>
            </div>
            <div className='flex flex-col gap-4'>
              <a href="#">Events</a>
              <a href="#">Contact</a>
              <a href="#">Magazine</a>
            </div>
          </section>
        </section>
        
        <section className='w-[90%] max-w-[1068px] mt-8'>
          <hr className="h-px mt-10 bg-white border-0" />
          <hr className="h-px mt-10 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex flex-col items-center justify-between text-center text-gray-300 md:flex-row md:text-left">
            <div>© 2023 ABITRGIT. All rights reserved.</div>
            <div className="flex mt-2 space-x-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </section>
      </footer>
      <hr className="h-px my-10 bg-transparent border-0" />
      <hr className="h-px my-10 bg-transparent border-0" />
    </>
  );
}

export default Footer;