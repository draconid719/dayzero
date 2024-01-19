"use client";

import { FormProvider, useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AccentButton } from "../components/accent-button";
import { Textfield } from "../components/textfield";
import { SixteenSizeCalendarDate } from "../icons/SixteenSizeCalendarDate";
import { SixteenSizeProfile1 } from "../icons/SixteenSizeProfile1";
import { SixteenSizeEmail1 } from "../icons/SixteenSizeEmail1";
import { SixteenSizeLink1 } from "../icons/SixteenSizeLink1";
import { SixteenSizeSend } from "../icons/SixteenSizeSend";

const schema = yup.object({
  fullName: yup.string().required("The full name is required to proceed"),
  dob: yup.string().label("The DOB"),
  nickname: yup
    .string()
    .label("The nickname")
    .matches(/^\S*$/, "Spaces separated")
    .required("The nickname is required to proceed")
    .max(25)
    .test("nickname", "Nickname already in use", (value) => {
      return new Promise((resolve) => {
        const request = new Request("https://draconid719.github.io/dayzero/api/example/exist", {
          method: "POST",
          body: JSON.stringify({ name: value }),
        });

        fetch(request)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error("Something went wrong on API server!");
            }
          })
          .then((response) => {
            console.log("🚀 ~ .then ~ response:", response);
            if (response.result) {
              resolve(false);
            } else {
              resolve(true);
            }
          })
          .catch((error) => {
            console.log("🚀 ~ returnnewPromise ~ error:", error);
            resolve(true);
          });
      });
    }),
  email: yup.string().required("The email is required to proceed").email(),
  portfolio_link: yup
    .string()
    .label("The portfolio link")
    .matches(
      /^https:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      "The portfolio link must be a valid URL"
    )
    .required("The portfolio link is required to proceed"),
});

export type FormType = yup.InferType<typeof schema>;

interface Props {
  setSuccess: any;
}

export default function Form({ setSuccess }: Props) {
  const methods = useForm<FormType>({
    // defaultValues: {
    //   fullName: "aaa",
    //   dob: "",
    //   nickname: "aaa",
    //   email: "abc@example.com",
    //   portfolio_link: "https://example.com",
    // },
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: any) => {
    const request = new Request("https://draconid719.github.io/dayzero/api/example", {
      method: "POST",
      body: JSON.stringify(data),
    });

    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on API server!");
        }
      })
      .then((response) => {
        console.log("🚀 ~ .then ~ response:", response);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("🚀 ~ onSubmit ~ error:", error);
      });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="flex flex-col min-w-[var(--layout-responsividad-ancho-minimo)] min-h-[var(--layout-responsividad-tablet-ancho-tablet)] items-start gap-[var(--layout-espacio-margen-vertical)] relative self-center"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <header className="flex flex-col items-start justify-center gap-[var(--user-interface-spacing-short-margin)] pt-[var(--user-interface-spacing-big-margin)] pr-[var(--user-interface-spacing-horizontal-margin)] pb-[var(--user-interface-spacing-big-margin)] pl-[var(--user-interface-spacing-horizontal-margin)] relative self-stretch w-full flex-[0_0_auto] bg-user-interface-colors-shades-button-shade">
            <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-headers-primary font-[number:var(--headers-primary-font-weight)] text-user-interface-colors-primary text-[length:var(--headers-primary-font-size)] tracking-[var(--headers-primary-letter-spacing)] leading-[var(--headers-primary-line-height)] whitespace-nowrap [font-style:var(--headers-primary-font-style)]">
                Welcome!
              </div>
              <div className="flex w-[20px] h-[20px] items-center justify-center relative">
                <img
                  className="relative w-[19.41px] h-[19.41px]"
                  alt="Vector"
                  src="https://c.animaapp.com/VE2ng7gf/img/vector.svg"
                />
              </div>
            </div>
            <p className="relative self-stretch font-body-regular font-[number:var(--body-regular-font-weight)] text-user-interface-colors-text-secondary text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
              Please, complete the following <br /> example form.
            </p>
          </header>
          <div className="justify-center gap-[var(--user-interface-spacing-short-margin)] pr-[var(--user-interface-spacing-horizontal-margin)] pl-[var(--user-interface-spacing-horizontal-margin)] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-col gap-[var(--user-interface-spacing-vertical-margin)] pt-[var(--user-interface-spacing-vertical-margin)] pr-[var(--user-interface-spacing-vertical-margin)] pb-[var(--user-interface-spacing-vertical-margin)] pl-[var(--user-interface-spacing-vertical-margin)] rounded-[var(--user-interface-spacing-short-margin)] border border-solid border-user-interface-colors-divider flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-user-interface-colors-text-secondary text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] [font-style:var(--body-bold-font-style)]">
                About you
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <Textfield
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  label="FULL NAME"
                  name="fullName"
                  required={
                    !(
                      schema.fields.fullName.describe() as yup.SchemaDescription
                    ).optional
                  }
                  hasProgress={false}
                  icon={
                    <SixteenSizeProfile1 className="!relative !w-[16px] !h-[16px]" />
                  }
                  errorIcon={
                    <SixteenSizeProfile1
                      className="!relative !w-[16px] !h-[16px]"
                      color="#FF4141"
                    />
                  }
                />
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <Textfield
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  label="DATE OF BIRTH"
                  name="dob"
                  required={
                    !(schema.fields.dob.describe() as yup.SchemaDescription)
                      .optional
                  }
                  type="date"
                  hasProgress={false}
                  icon={
                    <SixteenSizeCalendarDate className="!relative !w-[16px] !h-[16.14px]" />
                  }
                  errorIcon={
                    <SixteenSizeCalendarDate
                      className="!relative !w-[16px] !h-[16.14px]"
                      color="#FF4141"
                    />
                  }
                />
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <Textfield
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  label="NICKNAME"
                  name="nickname"
                  placeholder="No spaces"
                  required={
                    !(
                      schema.fields.nickname.describe() as yup.SchemaDescription
                    ).optional
                  }
                  max={25}
                  hasProgress={false}
                  icon={
                    <SixteenSizeSend className="!w-[17.21px] !ml-[-0.60px] !relative !h-[16px]" />
                  }
                  errorIcon={
                    <SixteenSizeSend
                      className="!w-[17.21px] !ml-[-0.60px] !relative !h-[16px]"
                      color="#FF4141"
                    />
                  }
                  showDot={true}
                />
              </div>
              <div className="relative self-stretch font-body-bold font-[number:var(--body-bold-font-weight)] text-user-interface-colors-text-secondary text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] [font-style:var(--body-bold-font-style)]">
                Contact information
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <Textfield
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  label="EMAIL"
                  name="email"
                  required={
                    !(schema.fields.email.describe() as yup.SchemaDescription)
                      .optional
                  }
                  placeholder="email@example.com"
                  hasProgress={false}
                  iMATextfieldClassName="!mr-[-57.00px]"
                  icon={
                    <SixteenSizeEmail1 className="!w-[16px] !relative !h-[16px]" />
                  }
                  errorIcon={
                    <SixteenSizeEmail1
                      className="!w-[16px] !relative !h-[16px]"
                      color="#FF4141"
                    />
                  }
                />
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <Textfield
                  className="!self-stretch !flex-[0_0_auto] !w-full"
                  label="PORTFOLIO LINK"
                  name="portfolio_link"
                  required={
                    !(
                      schema.fields.portfolio_link.describe() as yup.SchemaDescription
                    ).optional
                  }
                  placeholder="https://"
                  prefix="https://"
                  hasProgress={false}
                  icon={
                    <SixteenSizeLink1 className="!w-[16.09px] !ml-[-0.04px] !relative !h-[16px]" />
                  }
                  errorIcon={
                    <SixteenSizeLink1
                      className="!w-[16.09px] !ml-[-0.04px] !relative !h-[16px]"
                      color="#FF4141"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-[8px] pr-[var(--user-interface-spacing-horizontal-margin)] pl-[var(--user-interface-spacing-horizontal-margin)] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <AccentButton
              className="!flex-[0_0_auto]"
              stateProp="normal"
              text="Submit my form"
              type="joyful"
              waveClassName="!left-[-149px]"
              onClick={methods.handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </FormProvider>
      {/* <DevTool control={methods.control} /> */}
    </>
  );
}
