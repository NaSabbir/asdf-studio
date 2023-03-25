import Image from "next/image";
import airlylogo from "../../public/assets/logos/airly-logo.svg";
import mobileMenu from "../../public/assets/logos/mobileMenu.svg";
import mobileCancel from "../../public/assets/logos/mobileCancel.svg";

export const AirlyLogo = () => {
  return <Image src={airlylogo} width={82} height={40} alt="airly logo" className="ml-3"/>;
};

export const MobileMenu = () => {
  return <Image src={mobileMenu} width={37} height={24} alt="mobile menu" className="mr-3"/>;
};

export const MobileCancel = () => {
  return <Image src={mobileCancel} width={37} height={24} alt="mobile cancel" className="mr-3"/>;
};