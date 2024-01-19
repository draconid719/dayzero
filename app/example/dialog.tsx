import React from "react";
import { LoadingAnimation } from "../components/loading-animation";
import { CloseButton } from "../components/close-button";

interface Props {
  open: boolean;
  handleOpen: any;
}
export const Dialog = ({ open, handleOpen }: Props): JSX.Element => {
  return (
    <div className={"fixed top-0"}>
      <div className={`fixed w-full ${open && "h-full"} bg-black/50`}></div>
      <div
        className={`fixed w-full flex justify-center bottom-0 transition-all duration-300 ${
          open ? "!-translate-y-0 !opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col w-[320px] items-center gap-[var(--user-interface-spacing-large-margin)] bg-user-interface-colors-light-contrast rounded-[var(--user-interface-radius-radius-medium)] overflow-hidden shadow-elevation-3 relative">
          <div className="flex items-center justify-center gap-[8px] pt-[var(--user-interface-spacing-vertical-margin)] pr-[var(--user-interface-spacing-big-margin)] pb-[var(--user-interface-spacing-vertical-margin)] pl-[var(--user-interface-spacing-big-margin)] relative self-stretch w-full flex-[0_0_auto] bg-user-interface-colors-shades-button-shade rounded-[8px]">
            <LoadingAnimation />
          </div>
          <div className="flex flex-col items-center gap-[var(--user-interface-spacing-vertical-margin)] pr-[var(--user-interface-spacing-big-margin)] pb-[var(--user-interface-spacing-big-margin)] pl-[var(--user-interface-spacing-big-margin)] pt-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-headers-secondary font-[number:var(--headers-secondary-font-weight)] text-user-interface-colors-primary text-[length:var(--headers-secondary-font-size)] tracking-[var(--headers-secondary-letter-spacing)] leading-[var(--headers-secondary-line-height)] whitespace-nowrap [font-style:var(--headers-secondary-font-style)]">
              Thank you!
            </div>
            <p className="relative self-stretch [font-family:'Switzer-Regular',Helvetica] font-normal text-user-interface-colors-text-secondary text-[16px] text-center tracking-[0.32px] leading-[24px]">
              <span className="font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201e1ccc] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                Every detail is important. Please, be aware about{" "}
              </span>
              <span className="font-body-bold font-[number:var(--body-bold-font-weight)] [font-style:var(--body-bold-font-style)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] text-[length:var(--body-bold-font-size)]">
                spacing
              </span>
              <span className="font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201e1ccc] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                ,{" "}
              </span>
              <span className="font-body-bold font-[number:var(--body-bold-font-weight)] [font-style:var(--body-bold-font-style)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] text-[length:var(--body-bold-font-size)]">
                animations
              </span>
              <span className="font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201e1ccc] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                ,{" "}
              </span>
              <span className="font-body-bold font-[number:var(--body-bold-font-weight)] [font-style:var(--body-bold-font-style)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] text-[length:var(--body-bold-font-size)]">
                transitions
              </span>
              <span className="font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201e1ccc] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                ,{" "}
              </span>
              <span className="font-body-bold font-[number:var(--body-bold-font-weight)] [font-style:var(--body-bold-font-style)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] text-[length:var(--body-bold-font-size)]">
                easing
              </span>
              <span className="font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201e1ccc] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                ,{" "}
              </span>
              <span className="font-body-bold font-[number:var(--body-bold-font-weight)] [font-style:var(--body-bold-font-style)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] text-[length:var(--body-bold-font-size)]">
                sizing
              </span>
              <span className="font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201e1ccc] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                {" "}
                and{" "}
              </span>
              <span className="font-body-bold font-[number:var(--body-bold-font-weight)] [font-style:var(--body-bold-font-style)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] text-[length:var(--body-bold-font-size)]">
                timing
              </span>
              <span className="font-body-regular font-[number:var(--body-regular-font-weight)] text-[#201e1ccc] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
                .
              </span>
            </p>
          </div>
          <CloseButton
            className="!absolute !w-[32px] !h-[32px] !top-[24px] !left-[264px]"
            handleClick={handleOpen}
          />
        </div>
      </div>
    </div>
  );
};
