"use client";

import React from "react";

interface Props {
  className: any;
  handleClick: any;
}

export const CloseButton = ({ className, handleClick }: Props): JSX.Element => {
  return (
    <button
      className={`${className} hover:-rotate-90 duration-300 hover:bg-user-interface-colors-shades-gray-shade rounded-[var(--user-interface-radius-radius-huge)]`}
      onClick={() => handleClick(false)}
    >
      <svg
        fill="none"
        height="32"
        viewBox="0 0 32 32"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M14.8592 15.9999L8.76294 9.90368L9.90374 8.76288L16 14.8591L22.0963 8.76288L23.2371 9.90368L17.1408 15.9999L23.2371 22.0962L22.0963 23.237L16 17.1407L9.90374 23.237L8.76294 22.0962L14.8592 15.9999Z"
          fill="#201E1C"
          fillOpacity="0.8"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};
