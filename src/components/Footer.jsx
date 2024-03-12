import React from 'react';
import logofooter from '../images/logonav.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col lg:flex-row mb-4 lg:mb-0 lg:w-3/4 lg:mr-16">
          <img src={logofooter} alt="" />
          <div className='flex flex-col ml-10'>
            <h2 className="text-lg font-semibold mb-2 text-center lg:text-left ml-4">Location :</h2>
            <p className="text-gray-300 w-[250px] lg:w-2/3 text-center mb-8">
              MCT's Rajiv Gandhi Institute Of Technology, Juhu Versova Link Rd,
              Versova, Andheri West, Mumbai-400053
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <p className="text-lg font-semibold text-center">Contact : </p>
            <a
              href="mailto:abitrgit.it@gmail.com"
              className="text-gray-300 hover:text-white"
            >
              abitrgit.it@gmail.com
            </a>
          </div>
          <div className='flex justify-between '>
            <FaFacebookSquare size={28} />
            <FaInstagram size={28} />
            <FaLinkedin size={28} />
          </div>
        </div>
        <div className="flex flex-col text-center gap-3">
          <div className='flex flex-col'>
            <a href="#">About Us</a>
            <a href="#">Faculty</a>
            <a href="#">Team</a>
            <a href="#">Attendance</a>
          </div>
          <div className='flex flex-col'>
            <a href="#">Events</a>
            <a href="#">Contact</a>
            <a href="#">Magazine</a>
          </div>
          {/* <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Faculty
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Magazine
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Attendance
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul> */}
        </div>

      </div>
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

    </footer>
  );
}

export default Footer;
