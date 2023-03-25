import { FC } from "react";
import { ArrowRight } from "icons";

type Props = {
  icon: React.ReactElement;
  type: "circle" | "square";
  classname?: string;
  onClick?: () => void;
};

export const IconButton: FC<Props> = ({
  icon,
  type = "circle",
  classname = "",
  onClick,
}) => {
  const classMapping: Record<"circle" | "square", string> = {
    circle:
      "rounded-full shadow-buttonShadow2 flex justify-center items-center",
    square: "",
  };

  return (
    <button
      onClick={onClick}
      className={[classMapping[type], classname].join(" ")}
    >
      {icon}
    </button>
  );
};
