import React from "react";

export default function SearchInput({
  onChange,
  searchBy,
  fetchData,
  onselectChange,
}) {
  //   const [searchBy, setsearchBy] = useState("city name");
  return (
    <div className="input-group bg-white rounded-pill pe-1 m-2 mt-3 mx-auto w-45">
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
      {searchBy === "city ID" ? (
        <>
          <input
            type="text"
            aria-describedby="button-addon2"
            name="cityCode"
            className="form-control border-0 bg-white"
            placeholder={`zip code`}
            onChange={onChange}
          />
          <input
            type="search"
            aria-describedby="button-addon2"
            className={`form-control border-0 bg-white ${
              searchBy === `city Name` && "d-none"
            }`}
            name="countryCode"
            placeholder={`Enter country ID`}
            name="country code"
            onChange={onChange}
          />
        </>
      ) : (
        <input
          type="search"
          aria-describedby="button-addon2"
          className="form-control border-0 bg-white"
          placeholder={`search by  ${searchBy}`}
          onChange={onChange}
        />
      )}
      <select
        class="form-control"
        id="exampleFormControlSelect1"
        onChange={onselectChange}
        value={searchBy}
      >
        <option
          value="city Name"
          name="cityname"
          selected={searchBy === "city name"}
        >
          By CityName
        </option>
        <option value="city ID" name="cityid" selected={searchBy === "city ID"}>
          By CIty ID
        </option>
      </select>
    </div>
  );
}
