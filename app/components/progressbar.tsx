import React from "react";

interface Props {
  size: "tiny";
  progress: number;
  className: any;
  progressClassName: any;
}

export const ProgressBar = ({
  progress,
  className,
  progressClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`w-[161px] h-px relative ${
        progress >= 100
          ? "bg-user-interface-colors-shades-gray-shade"
          : "bg-user-interface-colors-divider"
      } ${className}`}
    >
      <div
        className={`h-px bg-[color:var(--user-interface-colors-text)] ${
          progress === 0
            ? "w-[0px]"
            : progress <= 25
            ? "w-[64px]"
            : progress <= 50
            ? "w-[128px]"
            : progress <= 75
            ? "w-[192px]"
            : ""
        } ${progressClassName}`}
      />
    </div>
  );
};
