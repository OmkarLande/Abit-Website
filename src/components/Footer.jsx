import React from 'react';
import logofooter from '../images/logonav.png';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex flex-col mb-4 lg:mb-0 lg:mr-16">
        <img src={logofooter} alt="" />
          <h2 className="text-2xl font-bold mb-2">Location</h2>
          <p className="text-gray-300">
            MCT's Rajiv Gandhi Institute Of Technology, Juhu Versova Link Rd,
            Versova, Andheri West, Mumbai-400053
          </p>
        </div>
        <div className="flex  mb-4 lg:mb-0">
          <p className="  mb-2">Contact </p>
          <ul className="flex  space-y-2">
            <li>
              <a
                href="mailto:abitrgit.it@gmail.com"
                className="text-gray-300 hover:text-white"
              >
                abitrgit.it@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-facebook-f mr-2"></i>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-linkedin-in mr-2"></i>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-4 lg:mb-0 lg:mr-16">
          <ul className="flex flex-col space-y-2">
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
          </ul>
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
