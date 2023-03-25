import { ChevronRight } from "icons";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./button";
import { Typography } from "./Typography";

type Props = {
  image: {
    path: string;
    width: number;
    height: number;
  };
  title: string;
  desc: string;
  buttonText: string;
};

export const FooterCard: FC<Props> = ({
  image,
  title,
  desc,
  buttonText = "",
}) => {
  const { path, width, height } = image;

  return (
    <div className="max-w-full sm:max-w-[285px] w-full flex flex-col items-center sm:items-center xl:items-start">
      <div className="h-[114px] ml-2 mb-2">
        <Image
          src={"/assets/landing/Footer/" + path}
          width={width}
          height={height}
          alt="image"
        />
      </div>

      <div className="flex flex-col sm:h-[125px] h-[116px]">
        <Typography
          variant="title2"
          classname="text-main-deepBlue text-center sm:items-center xl:text-start"
        >
          {title}
        </Typography>
        <Typography
          classname="text-main-deepBlue text-center sm:items-center xl:text-start"
          variant="title1"
        >
          {desc}
        </Typography>
      </div>
      <Button
        endIcon={<ChevronRight className="fill-main-blue -mt-1" />}
        variant="secondary"
        className="w-[225px] h-[45px] shadow-buttonShadow2 pt-1"
        typoVariant="title-semi"
      >
        {buttonText}
      </Button>
    </div>
  );
};
