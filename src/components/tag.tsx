import { Typography } from "./Typography";

type Props = {
  text: string;
  variant?: "blue" | "white";
};

export const Tag: React.FC<Props> = ({ text, variant = "blue" }) => {
  const colorMapping = {
    blue: "text-main-deepBlue",
    white: "text-white",
  };
  return (
    <div
      className={[
        "h-[30px] rounded-[15px] border-[0.8px] w-fit px-[18px] flex items-center",
        variant === "blue" ? "border-border-tag" : "border-border-tag1",
      ].join(" ")}
    >
      <Typography
        variant="label1"
        classname={[colorMapping[variant]].join(" ")}
      >
        {text}
      </Typography>
    </div>
  );
};
