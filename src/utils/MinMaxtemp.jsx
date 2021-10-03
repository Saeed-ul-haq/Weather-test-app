import React from "react";
import { toCelcius } from "../utils/tempConverter";

export default function MinMaxtemp({ min, max }) {
  return (
    <p>Highest & Lowest temperature
      {toCelcius(min)} &deg; C
      <span className="ml-3">{toCelcius(max)} &deg;C</span>
    </p>
  );
}
