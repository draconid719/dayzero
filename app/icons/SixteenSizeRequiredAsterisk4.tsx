import React from "react";

interface Props {
  color: string;
  className: any;
}

export const SixteenSizeRequiredAsterisk4 = ({
  color = "#201E1C",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2L8.4485 3.36383C8.94467 4.87227 10.1278 6.05537 11.6362 6.55147L13 7L11.6362 7.4485C10.1278 7.94467 8.94467 9.12775 8.4485 10.6362L8 12L7.55147 10.6362C7.05537 9.12775 5.87227 7.94467 4.36383 7.4485L3 7L4.36383 6.55147C5.87227 6.05537 7.05537 4.87227 7.55147 3.36383L8 2Z"
        fill={color}
      />
    </svg>
  );
};
