"use client";

import React from "react";
import { useReducer } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SixteenSizeRequiredAsterisk4 } from "../icons/SixteenSizeRequiredAsterisk4";
import { NotificationDot } from "./notification-dot";
import { ProgressBar } from "./progressbar";
import { FormType } from "../example/form";
import { DateField } from "./date-field";

interface Props {
  required?: boolean;
  showLeftIcon?: boolean;
  showDot?: boolean;
  stateProp?:
    | "over"
    | "focus"
    | "normal"
    | "placeholder"
    | "error"
    | "disabled";
  hasProgress: boolean;
  className: any;
  icon: JSX.Element;
  errorIcon: JSX.Element;
  iMATextfieldClassName?: any;
  tall?: boolean;
  label: string;
  name: "fullName" | "dob" | "nickname" | "email" | "portfolio_link";
  max?: number;
  placeholder?: string;
  prefix?: string;
  type?: string;
}

export const Textfield = ({
  required = false,
  label = "Input label",
  showLeftIcon = true,
  showDot = false,
  stateProp = "normal",
  hasProgress,
  className,
  icon,
  errorIcon,
  iMATextfieldClassName,
  tall = false,
  name,
  placeholder,
  max,
  type,
}: Props): JSX.Element => {
  const {
    watch,
    register,
    getValues,
    setFocus,
    control,
    getFieldState,
    formState: { errors },
  } = useFormContext<FormType>();

  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "placeholder",
    hasProgress: hasProgress,
  });

  register(name);

  watch(name);

  return (
    <>
      <div
        className={`inline-flex items-center justify-center relative ${
          tall
            ? "pt-[var(--user-interface-spacing-short-margin)] pb-[var(--user-interface-spacing-short-margin)] px-0"
            : ""
        } !flex-[0_0_auto]`}
      >
        <div className="font-tiny-regular-uppercased w-fit mt-[-1.00px] tracking-[var(--tiny-regular-uppercased-letter-spacing)] text-[length:var(--tiny-regular-uppercased-font-size)] [font-style:var(--tiny-regular-uppercased-font-style)] text-user-interface-colors-text-secondary font-[number:var(--tiny-regular-uppercased-font-weight)] leading-[var(--tiny-regular-uppercased-line-height)] whitespace-nowrap relative">
          {label}
        </div>
        {required && (
          <SixteenSizeRequiredAsterisk4
            className="!relative !w-[16px] !h-[16px]"
            color="#FA7921"
          />
        )}
      </div>
      <div
        className={`w-[273px] flex flex-col items-start relative
          group
        ${
          errors?.[`${name}`]?.message === "error"
            ? "gap-[var(--user-interface-spacing-tiny-margin)]"
            : "gap-[7px]"
        } ${
          errors?.[`${name}`]?.message === "error"
            ? "rounded-[var(--user-interface-radius-radius)]"
            : ""
        } ${state.state === "normal" ? "justify-center" : ""} ${className}`}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
        onClick={() => {
          setFocus(name);
          dispatch("click");
        }}
        onBlur={() => {
          dispatch("blur");
        }}
      >
        <div
          className={`flex items-center flex-[0_0_auto] pt-[var(--user-interface-spacing-short-margin)] pb-[var(--user-interface-spacing-short-margin)] px-0 justify-between relative ${
            state.state === "placeholder" && !state.hasProgress
              ? "w-[273px]"
              : "w-full"
          } ${
            state.state === "disabled" ||
            state.state === "focus" ||
            state.state === "normal" ||
            state.state === "over" ||
            (state.hasProgress && state.state === "placeholder")
              ? "self-stretch"
              : ""
          }`}
        >
          <div className="flex items-center grow gap-[var(--user-interface-spacing-short-margin)] flex-1 relative">
            {showLeftIcon && (
              <>{errors?.[`${name}`]?.message ? errorIcon : icon}</>
            )}

            <div
              className={`font-elements-text-inputs w-fit mt-[-1.00px] tracking-[var(--elements-text-inputs-letter-spacing)] text-[length:var(--elements-text-inputs-font-size)] [font-style:var(--elements-text-inputs-font-style)] font-[number:var(--elements-text-inputs-font-weight)] leading-[var(--elements-text-inputs-line-height)] whitespace-nowrap relative ${
                ["disabled", "placeholder"].includes(state.state)
                  ? "text-user-interface-colors-disabled"
                  : "text-[color:var(--user-interface-colors-text)]"
              } ${iMATextfieldClassName}`}
            >
              <Controller
                name={name}
                control={control}
                render={({ field }) =>
                  type && type === "date" ? (
                    <DateField
                      {...field}
                      className="bg-transparent	focus:outline-none placeholder:text-user-interface-colors-disabled"
                    />
                  ) : (
                    <input
                      {...field}
                      placeholder={placeholder}
                      className="bg-transparent	focus:outline-none placeholder:text-user-interface-colors-disabled"
                      onKeyDown={() => {
                        dispatch("typing");
                      }}
                    />
                  )
                }
              />
            </div>
          </div>
          <div className="inline-flex items-center gap-[8px] flex-[0_0_auto] relative">
            {showDot && (
              <NotificationDot
                className={
                  state.state === "over"
                    ? "!opacity-0 !flex-[0_0_auto] !bg-user-interface-colors-secondary"
                    : state.state === "focus"
                    ? "!flex-[0_0_auto] !bg-[color:var(--user-interface-colors-text)]"
                    : state.state === "disabled"
                    ? "!opacity-0 !flex-[0_0_auto] !bg-user-interface-colors-disabled"
                    : "!opacity-0 !flex-[0_0_auto] !bg-user-interface-colors-text-secondary"
                }
                text={`${getValues(name)?.toString().length || 0}/${max}`}
                type="medium"
              />
            )}
          </div>
        </div>
        <ProgressBar
          className="!absolute !left-0 !w-[256px] !top-[39px]"
          progress={
            state.hasProgress && state.state === "focus" && max
              ? ((getValues(name)?.toString().length || 0) / max) * 100
              : 100
          }
          progressClassName={
            state.state === "over"
              ? "!bg-user-interface-colors-secondary"
              : !state.hasProgress && state.state === "focus"
              ? "!bg-user-interface-colors-accent"
              : state.hasProgress && state.state === "focus"
              ? "!bg-user-interface-colors-accent"
              : errors?.[`${name}`]?.message
              ? "!bg-user-interface-colors-error"
              : state.state === "disabled"
              ? "!bg-user-interface-colors-disabled"
              : ""
          }
          size="tiny"
        />
        {errors?.[`${name}`]?.message && (
          <p className="font-tiny-light self-stretch tracking-[var(--tiny-light-letter-spacing)] [font-style:var(--tiny-light-font-style)] text-[length:var(--tiny-light-font-size)] text-user-interface-colors-error font-[number:var(--tiny-light-font-weight)] leading-[var(--tiny-light-line-height)] relative">
            {errors?.[`${name}`]?.message}
          </p>
        )}
      </div>
    </>
  );
};

function reducer(state: any, action: any) {
  if (action === "typing") {
    return {
      hasProgress: true,
      state: "focus",
    };
  }

  if (action === "click") {
    return {
      hasProgress: false,
      state: "focus",
    };
  }

  if (state.hasProgress === false && state.state === "normal") {
    switch (action) {
      case "mouse_enter":
        return {
          hasProgress: false,
          state: "over",
        };
    }
  }

  if (state.hasProgress === false && state.state === "over") {
    switch (action) {
      case "mouse_leave":
        return {
          hasProgress: false,
          state: "normal",
        };

      case "click":
        return {
          hasProgress: false,
          state: "focus",
        };
    }
  }

  if (state.hasProgress === true && state.state === "normal") {
    switch (action) {
      case "mouse_enter":
        return {
          hasProgress: true,
          state: "over",
        };
    }
  }

  if (state.hasProgress === true && state.state === "over") {
    switch (action) {
      case "mouse_leave":
        return {
          hasProgress: true,
          state: "normal",
        };

      case "click":
        return {
          hasProgress: true,
          state: "focus",
        };
    }
  }

  if (state.hasProgress === false && state.state === "focus") {
    switch (action) {
      case "blur":
        return {
          hasProgress: false,
          state: "normal",
        };
    }
  }

  if (state.hasProgress === true && state.state === "focus") {
    switch (action) {
      case "blur":
        return {
          hasProgress: false,
          state: "normal",
        };
    }
  }

  return state;
}
