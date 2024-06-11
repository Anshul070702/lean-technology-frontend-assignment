import React, { useState } from "react";

const Contact = ({ isLogin }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", mobile: "", query: "" });
      }, 5000);
    }
  };

  const isFormValid = Object.values(formData).every(
    (field) => field.trim() !== ""
  );

  if (isSubmitted) {
    return (
      <div className="shadow-2xl mb-10 fixed right-[52px] bottom-16 flex items-center justify-center h-auto w-[430px] bg-white rounded-[10px] p-4">
        <p className="text-center text-xl font-semibold text-[#4D4D4D]">
          We will get back to you as soon as possible!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-2xl mb-10 fixed right-[52px] bottom-16 flex items-center justify-center h-auto w-[430px] bg-white rounded-[10px] py-2"
    >
      <div className="p-4 py-2 w-full">
        <h2 className="mb-6 text-center text-xl font-semibold text-[#4D4D4D]">
          Let us know what
          <span className="font-bold text-black"> your queries</span> are!
        </h2>
        <hr className="mb-6 border-gray-400 border-solid border rounded-full" />
        <div className="mb-4">
          <label className="mb-2 block font-semibold text-[#4D4D4D]">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full rounded-md border-none bg-[#CCCCCC] px-3 py-2 text-black font-semibold"
          />
        </div>
        {!isLogin && (
          <>
            <div className="mb-4">
              <label className="mb-2 block font-semibold text-[#4D4D4D]">
                Your Email <span className="text-red-500">*</span>
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
            <div className="mb-4">
              <label className="mb-2 block font-semibold text-[#4D4D4D]">
                Your Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                className="block w-full rounded-md border-none bg-[#CCCCCC] px-3 py-2 text-black font-semibold"
              />
            </div>
          </>
        )}
        <div className="mb-4">
          <label className="mb-2 block font-semibold text-[#4D4D4D]">
            What would you like to ask <span className="text-red-500">*</span>
          </label>
          <textarea
            name="query"
            placeholder="Write here..."
            value={formData.query}
            onChange={handleChange}
            className="block w-full rounded-md border-none bg-[#CCCCCC] px-3 py-2 text-black font-semibold h-32 resize-none"
          />
        </div>
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

export default Contact;
