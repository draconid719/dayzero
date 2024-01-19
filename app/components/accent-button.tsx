"use client";

import React, { BaseSyntheticEvent } from "react";
import { useReducer } from "react";

interface Props {
  showArrow?: boolean;
  text: string;
  showText?: boolean;
  type: "joyful" | "primary-color";
  stateProp: "over" | "normal";
  className: any;
  waveClassName: any;
  onClick: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

export const AccentButton = ({
  showArrow = true,
  text = "I'm a button",
  showText = true,
  type,
  stateProp,
  className,
  waveClassName,
  onClick,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary-color",
    state: stateProp || "normal",
  });

  return (
    <button
      className={`border border-solid inline-flex items-center gap-[var(--user-interface-spacing-tiny-margin)] pt-[var(--user-interface-spacing-short-margin)] pr-[var(--user-interface-spacing-horizontal-margin)] pb-[var(--user-interface-spacing-short-margin)] pl-[var(--user-interface-spacing-horizontal-margin)] overflow-hidden rounded-[var(--user-interface-radius-radius)] justify-center relative ${
        state.state === "normal"
          ? "border-[color:var(--user-interface-colors-text)]"
          : state.type === "joyful" && state.state === "over"
          ? "border-user-interface-colors-accent"
          : "border-user-interface-colors-primary"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={onClick}
    >
      <div
        className={`h-[201px] absolute ${
          state.state === "over" ? "w-[560px]" : "w-[468px]"
        } ${state.state === "over" ? "left-[-210px]" : "left-[-164px]"} ${
          state.state === "over" ? "top-[-24px]" : "top-[40px]"
        } ${
          state.state === "over"
            ? "rounded-[280px/100.5px]"
            : "rounded-[234px/100.5px]"
        } ${
          state.type === "joyful" && state.state === "over"
            ? "bg-user-interface-colors-accent"
            : "bg-user-interface-colors-primary"
        } ${waveClassName}`}
      />
      {showText && (
        <div
          className={`font-body-regular w-fit mt-[-1.00px] tracking-[var(--body-regular-letter-spacing)] text-[length:var(--body-regular-font-size)] [font-style:var(--body-regular-font-style)] font-[number:var(--body-regular-font-weight)] leading-[var(--body-regular-line-height)] whitespace-nowrap relative ${
            state.state === "over"
              ? "text-user-interface-colors-light-contrast"
              : "text-[color:var(--user-interface-colors-text)]"
          }`}
        >
          {text}
        </div>
      )}

      {showArrow && (
        <img
          className="w-[16px] h-[16px] relative"
          alt="Element size all open"
          src={
            state.state === "over"
              ? "https://c.animaapp.com/VE2ng7gf/img/16-size-all-open-16-fit-16.svg"
              : "https://c.animaapp.com/VE2ng7gf/img/16-size-all-open-16-fit-17.svg"
          }
        />
      )}
    </button>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "over",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "normal",
      };
  }

  return state;
}
