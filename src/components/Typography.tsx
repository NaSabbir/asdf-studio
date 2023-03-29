import { FC } from "react";

export type TypoVariants =
  | "label"
  | "title"
  | "title-semi"
  | "heading"
  | "body"
  | "body1"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "label1"
  | "label2"
  | "title1"
  | "body2"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "title-semi-button";

type Props = {
  children: React.ReactNode;
  variant?: TypoVariants;
  classname?: string;
};

export const Typography: FC<Props> = ({
  children,
  variant = "label",
  classname = "",
}) => {
  const variantMapping: Record<TypoVariants, string> = {
    label: "text-[10.5px] tracking-[1.4px] leading-[24px] font-bold",
    title: "text-[16px] font-medium leading-[24px] tracking-[1.5px]",
    "title-semi":
      "text-[20px] sm:text-[15px] font-semibold leading-normal sm:leading-[24px] tracking-[5px] sm:tracking-[1.5px] font-demi",
    "title-semi-button":
      "text-[15px] font-semibold leading-[24px] tracking-[1.5px] font-demi",
    title1: "text-[16px] leading-[20px] sm:tracking-[0.5px] tracking-normal",
    title2: "text-[30px] leading-[50px] -tracking-[0.82px]",
    title3: "text-[16px] leading-[20px] tracking-[1.5px] font-sans",
    title4: "text-[16px] leading-[20px] font-bold",
    title5: "text-[16px] leading-[20px]",
    heading: "text-[40px] font-medium",
    body: "text-[14px] font-man font-bold tracking-[1px] leading-[24px]",
    heading1:
      "text-[55px] sm:text-[75px] leading-[114px] sm:-tracking-[2.05px] -tracking-[1.5px]",
    heading2:
      "text-[35px] sm:text-[49.5px] leading-[35px] sm:leading-normal -tracking-[0.95px] sm:-tracking-[1.35px]",
    heading3:
      "text-[35px] sm:text-[50px] leading-[1] sm:leading-[50px] -tracking-[0.95px] sm:-tracking-[1.36px]",
    heading4: "text-[40px] leading-[45px] -tracking-[1.09px] font-normal",
    heading5: "text-[30px] leading-[25px] -tracking-[1.09px] font-sans",
    body1: "text-[20px] leading-[26px] tracking-normal",
    body2: "text-[12px] leading-normal tracking-[0.2px]",
    label1:
      "text-[13.5px] font-demi font-semibold leading-normal tracking-[0px]",
    label2: "text-[13.5px]  leading-normal tracking-[0.84px]",
  };

  return (
    <span className={[variantMapping[variant], classname].join(" ")}>
      {children}
    </span>
  );
};
