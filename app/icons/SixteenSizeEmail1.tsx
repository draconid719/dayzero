import React from "react";

interface Props {
  className: any;
  color?: string;
}

export const SixteenSizeEmail1 = ({
  className,
  color = "#201E1C",
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
        clipRule="evenodd"
        d="M2 3H14C14.0435 3 14.0863 3.00278 14.1283 3.00816L8.87186 6.76279C8.35031 7.13533 7.64969 7.13533 7.12814 6.76279L1.87166 3.00816C1.91368 3.00278 1.95651 3 2 3ZM1.06021 3.65746C1.02125 3.76431 1 3.87967 1 4V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12V4C15 3.87967 14.9787 3.76431 14.9398 3.65746L9.4531 7.57653C8.58385 8.19741 7.41615 8.19741 6.5469 7.57653L1.06021 3.65746ZM0 4C0 2.89543 0.895431 2 2 2H14C15.1046 2 16 2.89543 16 4V12C16 13.1046 15.1046 14 14 14H2C0.895431 14 0 13.1046 0 12V4Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};
