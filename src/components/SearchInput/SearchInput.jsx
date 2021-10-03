import React, { useState } from "react";

export default function SearchInput({ onChange, fetchData }) {
  const [searchBy, setsearchBy] = useState("city name");
  return (
    <div className="input-group bg-white rounded-pill pe-1 m-2 mt-3 m-auto w-45">
      <div className="input-group-prepend">
        <button
          id="button-addon2"
          type="submit"
          className="btn btn-link link-primary-1 ms-2"
          onClick={fetchData}
        >
          <svg
            width="18.852"
            height="19.527"
            viewBox="0 0 18.852 19.527"
            fill="currentColor"
          >
            <path
              d="M19.55,17.786,14.9,12.952a7.881,7.881,0,1,0-6.034,2.816,7.8,7.8,0,0,0,4.517-1.427l4.683,4.87a1.028,1.028,0,1,0,1.482-1.426ZM8.868,2.057A5.827,5.827,0,1,1,3.041,7.884,5.834,5.834,0,0,1,8.868,2.057Z"
              transform="translate(-0.984)"
            ></path>
          </svg>
        </button>
      </div>
      <input
        type="search"
        aria-describedby="button-addon2"
        className="form-control border-0 bg-white"
        placeholder={searchBy}
        onChange={onChange}
      />
      <select class="form-control" id="exampleFormControlSelect1">
        <option value="city Name" selected={searchBy === "city name"}>
          By CityName
        </option>
        <option value="city ID" selected={searchBy === "city ID"}>
          By CIty ID
        </option>
      </select>
    </div>
  );
}