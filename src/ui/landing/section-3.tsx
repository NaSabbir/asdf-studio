import { Button, Canvas, Tag, Typography } from "components";
import { padding } from "../../constants";
import { ChevronRight } from "icons";
import Image from "next/image";
import { OurClients } from "./our-clients";

const BottomComp = (
  <div className="bg-lightBlue h-[750px] absolute top-0 z-0 w-full" />
);

export const SectionThree = () => {
  return (
    <Canvas
      classname="bg-white relative -top-[70px] sm:-mt-[250px]"
      bottomComp={BottomComp}
    >
      <div
        className={[
          "mx-auto w-full relative h-[1550px] sm:h-[1150px] z-10 max-w-mobile  sm:max-w-desktop-s",
          padding,
        ].join(" ")}
      >
        <Image
          className="absolute top-[221px] -left-[315px] z-0 sm:block -left-[525px] top-[310px] hidden xl:-left-[315px] top-[210px] "
          width={686}
          height={559}
          alt="instagram icon"
          src="/assets/landing/Marketing/instagram@2x.png"
        />
        <div className="absolute top-[530px] sm:top-[192px] flex flex-col w-[320px] sm:w-[400px] sm:left-[152px] z-30 xl:left-[442px]">
          <Typography
            variant="heading1"
            classname="text-main-deepBlue leading-normal"
          >
            Marketing
          </Typography>
          <div className="flex flex-col gap-5 sm:gap-[21px]">
            <Typography variant="body1" classname="text-main-deepBlue">
              Specialize in market research, brand development, advertising, public relations, event planning, and digital marketing.
            </Typography>
            <div className="flex flex-wrap gap-[7.5px] w-[90%]">
              <Tag variant="blue" text="SEO" />
              <Tag variant="blue" text="Content Strategy" />
              <Tag variant="blue" text="Social Marketing" />
              <Tag variant="blue" text="Branding" />
              <Tag variant="blue" text="Email Marketing" />
            </div>
            <Button
              typoVariant="title-semi-button"
              endIcon={<ChevronRight className="fill-white -mt-1"/>}
              className="w-full hover:bg-main-hoverOrange sm:w-[300px] h-[45px] shadow-buttonShadow4 pt-1"
            >
              Start a Design Project
            </Button>
          </div>
        </div>
        <Image
          className="absolute top-[131px] -right-[295px] z-0 hidden sm:block -right-[325px] sm:top-[161px] hidden x:-right-[300px] xl:hidden"
          width={596}
          height={617}
          alt="identify image"
          src="/assets/landing/Marketing/identity@2x.png"
        />
        <Image
          className="absolute top-[131px] -right-[295px] z-0 hidden sm:hidden x:hidden xl:block -right-[300px]"
          width={719}
          height={652}
          alt="identify image"
          src="/assets/landing/Marketing/identity@2x.png"
        />
        <Image
          className="absolute top-[70px] -right-[82px] z-0 sm:hidden max-w-[431px]"
          width={431}
          height={397}
          alt="mobile identify image"
          src="/assets/landing/Marketing/mobile-identify@2x.png"
        />
        <Image
          className="absolute top-[950px] -left-[128px] z-0 sm:hidden"
          width={686}
          height={559}
          alt="instagram"
          src="/assets/landing/Marketing/mobile-instagram@2x.png"
        />
        {/* <Image
          className="absolute top-[534px] left-[330px] z-0 hidden sm:block left-[100px] sm:top-[674px] x:left-[200px] xl:left-[400px] xl:top-[584px]"
          width={642}
          height={364}
          alt="google image"
          src="/assets/landing/Marketing/google@2x.png"
        /> */}
        <object type="image/svg+xml" data="/assets/landing/SVG/mareting.svg" className="w-[642px] h-[364px] absolute top-[534px] left-[330px] z-0 hidden sm:block left-[100px] sm:top-[674px] x:left-[200px] xl:left-[400px] xl:top-[584px]"></object>
        <Image
          className="absolute top-[1220px] left-0 z-0 sm:hidden"
          width={360}
          height={355}
          alt="google image"
          src="/assets/landing/Marketing/mobile-google@2x.png"
        />
      </div>
      <OurClients />
    </Canvas>
  );
};
