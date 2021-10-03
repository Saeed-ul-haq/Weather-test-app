import React from "react";

export default function Button({ className, text, onClick }) {
  return (
    <button className={`${className}`} onClick={onclick}>
      {text}
    </button>
  );
}
