import React, { useState } from "react";
import Comments from "./comments.jsx";
import {
  OptionsIcon,
  ReportIcon,
  FeedbackIcon,
  ContactIcon,
  CloseIcon,
  SuggestionIcon,
} from "../img/export.js";

import {
  Contact,
  Feedback,
  Report,
  Suggestion,
} from "../components/actionsButtons/export.js";

const ActionButtons = ({ isLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (clicked) {
      setSelectedSection(null);
      setClicked(false);
    }
  };

  const handleButtonClick = (section) => {
    if (!clicked) {
      setClicked(true);
    }
    setSelectedSection(section);
  };

  const renderSelectedSection = () => {
    switch (selectedSection) {
      case "Issue":
        return <Report isLogin={isLogin} />;
      case "Feedback":
        return <Feedback isLogin={isLogin} />;
      case "Contact":
        return <Contact isLogin={isLogin} />;
      case "Suggestion":
        return <Suggestion isLogin={isLogin} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-6 flex flex-col items-end p-2">
        <div className={`${clicked ? "flex" : "flex-row"}`}>
          {isOpen && (
            <>
              <div className="flex items-center justify-end">
                {!clicked && (
                  <h3 className="rounded-md bg-gray-200 p-2 flex items-center font-bold">
                    Report an Issue
                  </h3>
                )}

                <button
                  className="bg-white rounded-full mx-3 my-2"
                  onClick={() => handleButtonClick("Issue")}
                >
                  <img src={ReportIcon} alt="Report" className="w-14 h-14" />
                </button>
              </div>
              <div className="flex items-center justify-end">
                {!clicked && (
                  <h3 className="rounded-md bg-gray-200 p-2 flex items-center font-bold">
                    Share Feedback
                  </h3>
                )}

                <button
                  className="bg-white rounded-full mx-3 my-2"
                  onClick={() => handleButtonClick("Feedback")}
                >
                  <img
                    src={FeedbackIcon}
                    alt="Feedback"
                    className="w-14 h-14"
                  />
                </button>
              </div>
              <div className="flex items-center justify-end">
                {!clicked && (
                  <h3 className="rounded-md bg-gray-200 p-2 flex items-center font-bold">
                    Give Suggestion
                  </h3>
                )}

                <button
                  className="bg-white rounded-full mx-3 my-2"
                  onClick={() => handleButtonClick("Suggestion")}
                >
                  <img
                    src={SuggestionIcon}
                    alt="Suggestion"
                    className="w-14 h-14"
                  />
                </button>
              </div>
              <div className="flex justify-end items-center">
                {!clicked && (
                  <h3 className="rounded-md bg-gray-200 p-2 flex items-center font-bold">
                    Contact Us
                  </h3>
                )}
                <button
                  className="bg-white rounded-full mx-3 my-2"
                  onClick={() => handleButtonClick("Contact")}
                >
                  <img src={ContactIcon} alt="Contact" className="w-14 h-14" />
                </button>
              </div>
            </>
          )}
          <div className="flex items-center justify-end">
            <button
              onClick={toggleMenu}
              className="bg-black rounded-full mx-2 my-2"
            >
              <img
                src={isOpen ? CloseIcon : OptionsIcon}
                alt="OptionsIcon"
                className="w-16 h-16"
              />
            </button>
          </div>
        </div>
        <div className="fixed bottom-20 right-80">
          {renderSelectedSection()}
        </div>
      </div>
      <Comments clicked={clicked} />
    </>
  );
};

export default ActionButtons;
