import React, { useState } from "react";
import Attach from "../../img/Attach.png"; // Assuming Attach.png is the image file path

const Feedback = (isLogin) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ email: "", anonymous: false });
      }, 5000);
    }
  };

  const isFormValid = formData.email.trim() !== "" || formData.anonymous;

  if (isSubmitted) {
    return (
      <div className="shadow-2xl mb-10 fixed right-[52px] bottom-16 flex items-center justify-center h-auto w-[430px] bg-white rounded-[10px] p-4">
        <p className="text-center text-xl font-semibold text-[#4D4D4D]">
          Thanks for your valuable feedback!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-2xl mb-10 fixed right-[52px] bottom-16 flex items-center justify-center h-auto w-[380px] bg-white rounded-[10px] py-2"
    >
      <div className="p-4 py-2 w-full relative">
        <h2 className="mb-6 text-center text-xl font-semibold text-[#4D4D4D]">
          Let us know your
          <span className="font-bold text-black"> Feedback</span> about us!
        </h2>
        <hr className="mb-6 border-gray-400 border-solid border rounded-full" />
        <div className="mb-4 relative">
          <textarea
            name="query"
            placeholder="Write here..."
            value={formData.query}
            onChange={handleChange}
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
              Enter your email to receive an update{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border-none bg-[#CCCCCC] px-3 py-2 text-black font-semibold"
            />
          </div>
        )}
        {isLogin && (
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
                className="h-6 w-6"
              />
              <span className="ml-2 text-[#4D4D4D] font-semibold">
                Send message anonymously <span className="text-red-500">*</span>
              </span>
            </label>
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

export default Feedback;
