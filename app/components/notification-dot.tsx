import React from "react";

interface Props {
  text: string;
  type: "dot" | "medium" | "small";
  className: any;
}

export const NotificationDot = ({
  text = "25",
  type,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`bg-user-interface-colors-accent relative ${
        ["medium", "small"].includes(type)
          ? "min-h-[var(--user-interface-spacing-horizontal-margin)]"
          : ""
      } ${type === "dot" ? "w-[8px]" : ""} ${
        ["medium", "small"].includes(type) ? "inline-flex" : ""
      } ${
        ["medium", "small"].includes(type)
          ? "min-w-[var(--user-interface-spacing-horizontal-margin)]"
          : ""
      } ${["medium", "small"].includes(type) ? "flex-col" : ""} ${
        ["medium", "small"].includes(type) ? "items-center" : ""
      } ${
        type === "medium"
          ? "pr-[var(--user-interface-spacing-short-margin)] pl-[var(--user-interface-spacing-short-margin)] py-0"
          : type === "small"
          ? "pr-[var(--user-interface-spacing-tiny-margin)] pl-[var(--user-interface-spacing-tiny-margin)] py-[2px]"
          : ""
      } ${type === "dot" ? "h-[8px]" : ""} ${
        type === "medium"
          ? "rounded-[var(--user-interface-spacing-vertical-margin)]"
          : "rounded-[var(--user-interface-radius-radius)]"
      } ${
        ["medium", "small"].includes(type) ? "justify-center" : ""
      } ${className}`}
    >
      {["medium", "small"].includes(type) && (
        <div
          className={`w-fit text-user-interface-colors-light-contrast whitespace-nowrap relative ${
            type === "small"
              ? "font-tiny-nano-short-uppercased"
              : "font-tiny-tiny"
          } ${type === "medium" ? "mt-[-1.00px]" : ""} ${
            type === "small"
              ? "tracking-[var(--tiny-nano-short-uppercased-letter-spacing)]"
              : "tracking-[var(--tiny-tiny-letter-spacing)]"
          } ${
            type === "small"
              ? "text-[length:var(--tiny-nano-short-uppercased-font-size)]"
              : "text-[length:var(--tiny-tiny-font-size)]"
          } ${
            type === "small"
              ? "[font-style:var(--tiny-nano-short-uppercased-font-style)]"
              : "[font-style:var(--tiny-tiny-font-style)]"
          } ${
            type === "small"
              ? "font-[number:var(--tiny-nano-short-uppercased-font-weight)]"
              : "font-[number:var(--tiny-tiny-font-weight)]"
          } ${
            type === "small"
              ? "leading-[var(--tiny-nano-short-uppercased-line-height)]"
              : "leading-[var(--tiny-tiny-line-height)]"
          }`}
        >
          {text}
        </div>
      )}
    </div>
  );
};
