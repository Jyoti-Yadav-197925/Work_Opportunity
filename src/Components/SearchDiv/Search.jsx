import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import "./Search.css";
import style from '../SearchDiv/style.module.css';

function Search() {
  const [jobInput, setJobInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [typeOption, settypeOption] = useState("");
  const [levelOption, setlevelOption] = useState("");
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("Searching...");
    // Implement search logic here
  };

  const handleClearAll = (event) => {
    setJobInput("");
    setCompanyInput("");
    setLocationInput("");
    setSelectedOption("default value");
    settypeOption("default value 2");
    setlevelOption("default value 3");
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const typeChange = (event) => {
    settypeOption(event.target.value);
  };
  const levelChange = (event) => {
    setlevelOption(event.target.value);
  };
  return (
    <div className="searchDiv Txt">
      {" "}
      <h1 className={style.textSize}>Job Search</h1>
      <form onSubmit={handleSearch}>
        <div className="searchBars">
          <div className="firstDiv">
            <AiOutlineSearch className="searchIcon" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search Job Here..."
              value={jobInput}
              onChange={(e) => setJobInput(e.target.value)}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
              onClick={() => setJobInput("")}
            />
          </div>

          <div className="firstDiv">
            <BsHouseDoor className="searchIcon" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search by Company..."
              value={companyInput}
              onChange={(e) => setCompanyInput(e.target.value)}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
              onClick={() => setCompanyInput("")}
            />
          </div>

          <div className="firstDiv">
            <CiLocationOn className="searchIcon" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search by Location..."
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
              onClick={() => setLocationInput("")}
            />
          </div>
          <button type="submit" className="btn">
            {" "}
            Search{" "}
          </button>
        </div>
      </form>
      <div className="secDiv flex items-center gap-10px justify-center">
        <div className="singleSearch flex items-center gap-2px">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select
            value={selectedOption}
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
            onChange={handleChange}
          >
            <option value="default value">Default Value</option>
            <option value="relevance" selected>
              Relevance
            </option>
            <option value="inclusive">Inclusive</option>
            <option value="startswith">Starts With</option>
            <option value="contains">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>
          <select
            value={typeOption}
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
            onChange={typeChange}
          >
            <option value="default value">Default Value </option>
            <option value="Remote" selected>
              Remote
            </option>
            <option value="contract">Contract</option>
            <option value="parttime">Part-time</option>
            <option value="fulltime">Full-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>
          <select
            value={levelOption}
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
            onChange={levelChange}
          >
            <option value="default value">Default Value </option>
            <option value="beginner" selected>
              Beginner
            </option>
            <option value="intermediate">Intermediate</option>
            <option value="advance">Advance</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        <span
          className=" text-[#a1a1a1] cursor-pointer justify-center"
          onClick={handleClearAll}
        >
          Clear All
        </span>
      </div>
    </div>
  );
}

export default Search;
