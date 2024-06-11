import React, { useState } from "react";
import {
  Rocket,
  views,
  outline,
  Like,
  Edit,
  Text,
  Profile,
  Arrow,
} from "../../src/img/export";
import { SortByOptions } from "../constants/options";

const Comments = ({ clicked }) => {
  const [sortBy, setSortBy] = useState("Popular");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <div className="my-8 mx-14 flex items-center justify-start w-full max-w-[800px]">
        <img src={Arrow} alt="Arrow" className="w-10 h-10" />
        <h2 className="ml-4 text-white text-xl">Back to questions</h2>
      </div>
      <div className="flex flex-col items-center">
        {clicked && (
          <div className="flex items-center justify-between w-full max-w-[800px] mt-4">
            <p className="text-white text-2xl font-bold">Answers (23)</p>
            <div className="flex items-center space-x-2">
              <p className="text-white">Sort By:</p>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="border rounded-md p-2 bg-white text-black"
              >
                {SortByOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center w-full max-w-[800px]">
          <div className="p-4 mt-4 bg-white rounded-md shadow-md w-full">
            <div className="flex items-center justify-between p-4 rounded-sm">
              <div className="flex items-center space-x-2">
                <div className="bg-[#A9D9FF] text-white px-3 py-1 rounded-md">
                  Design
                </div>
                <div className="bg-[#A9D9FF] text-white px-3 py-1 rounded-md">
                  Technology
                </div>
              </div>
              <img src={Rocket} alt="Rocket Icon" />
            </div>
            <div className="px-4">
              <p className="text-md font-bold mb-2">
                A travel startup wants Amazon to pre-install their personal
                travel agent bot on existing Amazon Echos. What is the value of
                the partnership to the travel startup?
              </p>
              <p className="text-md mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus fuga, enim eaque nam non consectetur reprehenderit
                aperiam quasi unde quae perspiciatis officiis nesciunt
                laboriosam adipisci voluptatem explicabo consequuntur incidunt
                cupiditate.
              </p>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <img src={views} alt="Views Icon" />
                  <p className="text-md font-semibold">100 views</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={outline} alt="Outline Icon" />
                  <p className="text-md font-semibold">
                    How should you word your answer?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!clicked && (
          <div className="flex items-center justify-between w-full max-w-[800px] mt-4">
            <p className="text-white text-2xl font-bold">Answers (23)</p>
            <div className="flex items-center space-x-2">
              <p className="text-white">Sort By:</p>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="border rounded-md p-2 bg-white text-black"
              >
                {SortByOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center w-full max-w-[800px] mb-12">
          <div className="p-4 mt-4 bg-[#DEE7FF] rounded-md shadow-md w-full">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    src={Profile}
                    alt="Profile"
                    className="rounded-full h-[60px] w-[60px]"
                  />
                </div>
                <div className="p-2">
                  <p className="text-xl font-semibold">
                    <span className="font-bold">Neha Bhat</span> (You)
                  </p>
                  <p className="text-md font-semibold">Jun 27, 2023</p>
                </div>
              </div>
              <div className="flex space-x-2 justify-between items-center">
                <img src={Edit} alt="Edit" className="h-4 w-4" />
                <p className="text-md font-semibold">Edit</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-md mb-4 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus fuga, enim eaque nam non consectetur reprehenderit
                aperiam quasi unde quae perspiciatis officiis nesciunt
                laboriosam adipisci voluptatem explicabo consequuntur incidunt
                cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Temporibus fuga, enim eaque nam non consectetur
                reprehenderit aperiam quasi unde quae perspiciatis officiis
                nesciunt laboriosam adipisci voluptatem explicabo consequuntur
                incidunt cupiditate.
              </p>
              <div className="flex items-center justify-between mx-4">
                <div className="flex items-center space-x-2">
                  <img src={Like} alt="Like Icon" />
                  <img src={Text} alt="Comment Icon" />
                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="border border-[#0F0F0F] h-9 rounded-md p-2 w-[478px]"
                  ></input>
                  <button className="h-9 w-20 px-2 py-1 rounded-md bg-[#F5F5F5] shadow-2xl">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
