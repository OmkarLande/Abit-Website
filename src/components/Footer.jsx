import React from 'react';
import logofooter from '../images/logonav.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 md:grid md:gap-8">
      <section className='md:flex md:w-[1068px] md:h-[195px] mx-[150px]'>
        <section className="md:w-[746px] md:h-[200px] mx-auto flex flex-col items-center md:items-start md:gap-8">
          <div className="flex flex-col md:flex-row mb-4 md:mb-0">
            <img src={logofooter} alt="" className='md:w-[232px] md:h-[92px]' />
            <div className='flex flex-col ml-10'>
              <h2 className="text-lg font-medium mb-2 md:font-normal md:mb-0 text-center lg:text-left">Location :</h2>
              <p className="text-gray-300 w-[250px] md:w-[380px] md:h-[70px] md:text-xl text-center md:text-left mb-8">
                MCT's Rajiv Gandhi Institute Of Technology, Juhu Versova Link Rd,
                Versova, Andheri West, Mumbai-400053
              </p>
            </div>
          </div>
          <section className="flex flex-col md:flex-row gap-4 mb-6 text-center md:text-left md:w-[746px] md:h-[71px]">
            <div className='md:ml-4'>
              <p className="text-lg font-medium md:font-normal">Contact : </p>
              <a
                href="mailto:abitrgit.it@gmail.com"
                className="text-gray-300 hover:text-white md:text-xl"
              >
                abitrgit.it@gmail.com
              </a>
            </div>
            <div className='flex justify-between md:w-[200px] md:ml-16'>
              <FaFacebookSquare size={28} />
              <FaInstagram size={28} />
              <FaLinkedin size={28} />
            </div>
          </section>
        </section>
        <section className="flex flex-col md:flex-row text-center md:text-left md:text-lg gap-20">
          <div className='flex flex-col gap-3'>
            <a href="#">About Us</a>
            <a href="#">Faculty</a>
            <a href="#">Team</a>
            <a href="#">Attendance</a>
          </div>
          <div className='flex flex-col gap-3'>
            <a href="#">Events</a>
            <a href="#">Contact</a>
            <a href="#">Magazine</a>
          </div>
        </section>
      </section>


      <section className='md:w-[1300px] mx-auto'>
        <hr className="h-px my-8 mx-20 bg-gray-200 border-1 dark:bg-gray-700" />
        <div className="flex justify-between items-center mt-8 ml-20 mr-20 text-gray-300">
          <div>
            © 2023 ABITRGIT. All rights reserved.
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </section>

    </footer>
  );
}

export default Footer;
