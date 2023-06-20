import { CommentSVG } from "icons";
import { FC } from "react";
import { Typography } from "./Typography";

export type Colors = "orange" | "green" | "blue" | "lightBlue" | "deepBlue" | "skyBlue" | "red" | "ashBlue";

type Props = {
  comment: string;
  color: Colors;
  name: string;
  position: string;
};

export const CommentCard: FC<Props> = ({
  comment,
  color = "green",
  name,
  position,
}) => {
  const colorMapping = {
    orange: "#fcde9f",
    green: "#beffc4",
    blue: "#013e88",
    lightBlue: "#a0efff",
    deepBlue: "#2f71c7",
    skyBlue: "#d3e9f7",
    red: "#f97066",
    ashBlue: "#b3bfd7"
  };

  return (
    // shadow-commentShadow
    <div className="max-w-[320px] w-full sm:max-w-[396px] h-[520px] sm:h-[470px] flex flex-col bg-white border-border-comment border-[0.8px] rounded-[14px]  justify-between pt-[26px] pb-[23px] mx-auto">
      <div className="flex flex-col gap-[17.4px] px-[14.6px]">
        <CommentSVG fill={colorMapping[color]} />
        <Typography variant="title1" classname="text-main-deepBlue mx-[9.6px]">
          {comment}
        </Typography>
      </div>
      <div className="flex flex-col px-[23.8px] gap-1">
        <Typography
          variant="title1"
          classname="font-bold tracking-[0.44px] text-main-deepBlue"
        >
          {name}
        </Typography>
        <Typography
          variant="title1"
          classname="text-main-deepBlue leading-[16.5px]"
        >
          {position}
        </Typography>
      </div>
    </div>
  );
};
