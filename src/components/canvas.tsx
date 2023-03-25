import { FC } from "react";
import { responsiveScreen } from "../constants";

type Props = {
  children: React.ReactNode;
  classname?: string;
  containerClassName?: string;
  bottomComp?: JSX.Element;
};
export const Canvas: FC<Props> = ({
  children,
  classname = "",
  containerClassName = "",
  bottomComp,
}) => {
  return (
    <div className={[classname, "relative"].join(" ")}>
      <div className={["", responsiveScreen, containerClassName].join(" ")}>
        {children}
      </div>
      {bottomComp && bottomComp}
    </div>
  );
};
