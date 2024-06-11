import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Profile from "../img/profile.png";
import Action from "./Actions";
import { options } from "../constants/options";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLoginLogout = () => {
    setLoggedIn(!loggedIn);
    setDropdownOpen(false);
  };

  const toggleLearnDropdown = () => {
    setLearnDropdownOpen(!learnDropdownOpen);
  };

  const togglePracticeDropdown = () => {
    setPracticeDropdownOpen(!practiceDropdownOpen);
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between text-xl p-8 h-28">
        <div className="mt-2">
          <h2 className="text-white font-semibold">
            THE{" "}
            <span className="bg-white text-black font-semibold p-1 rounded-md">
              PRODUCT
            </span>{" "}
            PLATFORM
          </h2>
        </div>
        <div className="mt-2 flex items-center  ">
          <div className="mr-10 relative ">
            <button
              className="text-white flex items-center"
              onClick={toggleLearnDropdown}
            >
              Learn {learnDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {learnDropdownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white border rounded shadow-lg z-10">
                {options.map((option) => (
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-200 ease-in-out text-[16px]"
                    key={option.value}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mr-10 relative ">
            <button
              className="text-white flex items-center"
              onClick={togglePracticeDropdown}
            >
              Practice{" "}
              {practiceDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {practiceDropdownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white border rounded shadow-lg z-10">
                {options.map((option) => (
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-200 ease-in-out text-[16px]"
                    key={option.value}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <img
            className="h-16 w-16 cursor-pointer ml-4"
            src={Profile}
            alt="Profile"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute top-24 right-5 bg-white border rounded shadow-lg">
              <button
                className="block px-4 py-2 text-black"
                onClick={handleLoginLogout}
              >
                {loggedIn ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className="border-gray-400 border-solid border rounded-full" />
      <Action isLogin={loggedIn} />
    </div>
  );
};

export default Navbar;
