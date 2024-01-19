import React from "react";

interface Props {
  className: any;
  color?: string;
}

export const SixteenSizeProfile1 = ({
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
        d="M7.75245 1C5.68529 1 4.00952 2.67577 4.00952 4.74293C4.00952 5.93983 4.57132 7.00551 5.4456 7.69067C3.0965 8.37204 1.49646 10.7201 1.89417 13.2768C2.06725 14.3894 3.02535 15.21 4.15141 15.21H11.3971C12.5231 15.21 13.4812 14.3894 13.6543 13.2768C14.0538 10.7085 12.4375 8.35079 10.0709 7.68152C10.9386 6.99605 11.4954 5.93451 11.4954 4.74293C11.4954 2.67577 9.81962 1 7.75245 1ZM5.21952 4.74293C5.21952 3.34403 6.35355 2.21 7.75245 2.21C9.15135 2.21 10.2854 3.34403 10.2854 4.74293C10.2854 6.14183 9.15135 7.27586 7.75245 7.27586C6.35355 7.27586 5.21952 6.14183 5.21952 4.74293ZM3.08979 13.0908C2.7311 10.7849 4.51437 8.70278 6.84798 8.70278H8.70051C11.0341 8.70278 12.8174 10.7849 12.4587 13.0908C12.3773 13.6141 11.9267 14 11.3971 14H4.15141C3.6218 14 3.1712 13.6141 3.08979 13.0908Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};
