import React, { useState } from "react";
import Attach from "../../img/Attach.png";
import Select from "react-select";
import { options } from "../../constants/options";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; // Importing icons

const ReportIssue = ({ isLogin }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown open/close
  const [formData, setFormData] = useState({
    email: "",
    issue: "",
    type: null,
    anonymous: false,
  });

  const handleChange = (selectedOption) => {
    setFormData({
      ...formData,
      type: selectedOption,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ email: "", issue: "", type: null, anonymous: false });
      }, 5000);
    }
  };

  const isFormValid = formData.issue.trim() !== "" && formData.type !== null;

  if (isSubmitted) {
    return (
      <div className="shadow-2xl mb-10 fixed right-[52px] bottom-16 flex items-center justify-center h-auto w-[430px] bg-white rounded-[10px] p-4">
        <p className="text-center text-xl font-semibold text-[#4D4D4D]">
          Thanks for bringing the issue to our attention.We'll review it shortly
          and provide an update soon!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-2xl mb-10 fixed right-[52px] bottom-16 flex items-center justify-center h-auto w-[430px] bg-white rounded-[10px] py-2"
    >
      <div className="p-4 py-2 w-full relative">
        <h2 className="mb-6 text-center text-xl font-semibold text-[#4D4D4D]">
          Let us know about the
          <span className="font-bold text-black"> Issue</span> you are facing
          right now!
        </h2>
        <hr className="mb-6 border-gray-400 border-solid border rounded-full" />
        {/* Dropdown */}
        <div className="mb-4">
          <label className="mb-2 block font-semibold text-[#4D4D4D]">
            Select the type of issue <span className="text-red-500">*</span>
          </label>
          <Select
            value={formData.type}
            onChange={handleChange}
            options={options}
            placeholder="Select..."
            className="react-select-container"
            classNamePrefix="react-select"
            components={{
              DropdownIndicator: () => (
                <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  {isDropdownOpen ? (
                    <FiChevronUp className="text-[#4D4D4D]" />
                  ) : (
                    <FiChevronDown className="text-[#4D4D4D]" />
                  )}
                </div>
              ),
            }}
          />
        </div>
        {/* Textarea with Attach image */}
        <label className="mb-2 block font-semibold text-[#4D4D4D]">
          Describe the issue in detail <span className="text-red-500">*</span>
        </label>
        <div className="mb-4 relative">
          <textarea
            name="issue"
            placeholder="Write here..."
            value={formData.issue}
            onChange={(e) =>
              setFormData({ ...formData, issue: e.target.value })
            }
            className="block w-full rounded-md border-none bg-[#CCCCCC] px-3 py-2 text-black font-semibold h-32 resize-none"
          />
          <img
            src={Attach}
            alt="Attach"
            className="absolute bottom-2 left-2 w-20 h-6"
          />
        </div>
        {!isLogin && (
          <div className="mb-4">
            <label className="mb-2 block font-semibold text-[#4D4D4D]">
              Enter your email to receive an update
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="block w-full rounded-md border-none bg-[#CCCCCC] px-3 py-2 text-black font-semibold"
            />
          </div>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`h-9 w-24 rounded-[4px] bg-black text-white text-xl ${
              !isFormValid
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-black/80"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReportIssue;
