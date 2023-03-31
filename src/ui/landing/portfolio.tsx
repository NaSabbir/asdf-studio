import { Button, Canvas, Typography } from "components";
import { ChevronRight } from "icons";
import Image from "next/image";
import Link from "next/link";

export const Portfolio = () => {
  const portfolioImages = [
    { url: "rectangle-copy-13@2x.png", classname: "order-2 sm:order-1" },
    { url: "rectangle-copy-14@2x.png", classname: "order-3 sm:order-2" },
    { url: "rectangle-copy-15@2x.png", classname: "order-4 sm:order-3" },
    { url: "rectangle-copy-16@2x.png", classname: "order-5 sm:order-4" },
    { url: "rectangle-copy-17@2x.png", classname: "order-6 sm:order-5" },
    { url: "rectangle-copy-18@2x.png", classname: "order-7 sm:order-7" },
    { url: "rectangle-copy-19@2x.png", classname: "order-8 sm:order-8" },
    { url: "rectangle-copy-20@2x.png", classname: "order-9 sm:order-9" },
    { url: "rectangle-copy-21@2x.png", classname: "order-10 sm:order-10" },
    { url: "rectangle-copy-22@2x.png", classname: "order-11 sm:order-11" },
    { url: "rectangle-copy-23@2x.png", classname: "order-12 sm:order-12" },
    { url: "rectangle-copy-24@2x.png", classname: "order-[13] sm:order-[13]" },
    { url: "rectangle-copy-27@2x.png", classname: "order-[16] sm:order-[16]" },
    { url: "rectangle-copy-25@2x.png", classname: "order-[14] sm:order-[14]" },
    { url: "rectangle-copy-26@2x.png", classname: "order-[15] sm:order-[15]" },
  ];

  return (
    <Canvas classname="bg-greyBlue">
      <div className="w-full relative h-[1730px] sm:h-[1910px] x:h-[1690px] xl:h-[1690px] z-10" id='portfolio'>
        <div className="w-fit mx-auto">
          <Typography variant="heading1" classname="text-main-deepBlue">
            Portfolio
          </Typography>
        </div>
        <div className="sm:h-[25px]" />
        {/* <div className="h-24 relative bg-gradient-to-t from-cyan-100 to-blue-0 top-[200px]"></div> */}
        {/* for tablet & phone */}

        <div className="flex w-full mb-10 x:w-[421px] x:hidden flex flex-col gap-5 x:gap-[24.5px] order-1 xl:order-6 x:mb-0 mb-2.5">
            <Typography classname="text-[22px] sm:text-[40px] font-medium leading-normal x:leading-[45.6px] -tracking-[0.45px] x:-tracking-[0.82px] text-main-deepBlue text-center x:text-start">
              We partner with clients and navigate them through the challenges
              of creating innovative digital products.
            </Typography>
            <div className={"flex w-full justify-center sm: top-[180px]"}>
            <Button
              typoVariant="title-semi-button"
              endIcon={<ChevronRight className="fill-white"/>}
              className="w-[300px] max-w-[300px] h-[45px] shadow-buttonShadow4 mb-5 hover:bg-main-hoverOrange xl:hidden"
            >
              Our Portfolio
            </Button>
            </div>
        </div>
        <div className="absolute flex flex-wrap w-full justify-center 420:gap-[30px] px-5 sm:px-0 sm:w-[1080px] left-1/2 transform -translate-x-1/2 gap-5 x:px-0 x:w-[1780px] left-1/2 transform -translate-x-1/2 gap-5">
          <div className="flex w-full hidden x:block w-[421px] x:h-[353px] flex flex-col gap-5 x:gap-[24.5px] order-1 xl:order-6 x:mb-0 mb-2.5">
            <Typography classname="text-[22px] sm:text-[40px] font-medium leading-normal x:leading-[45.6px] -tracking-[0.45px] x:-tracking-[0.82px] text-main-deepBlue text-center x:text-start">
              We partner with clients and navigate them through the challenges
              of creating innovative digital products.
            </Typography>

            <Link href="https://airlystudio.myportfolio.com/" target="_blank" rel="noopener noreferrer">
              <Button
                typoVariant="title-semi-button"
                endIcon={<ChevronRight className="fill-white"/>}
                className="w-[300px] hover:bg-main-hoverOrange hidden xl:block max-w-[300px] h-[45px] shadow-buttonShadow4 mt-5"
              >
                Our Portfolio
              </Button>
            </Link>
          </div>
          {portfolioImages.map(({ url, classname }, index) => {
            return (
              <Image
                className={classname}
                alt="image"
                key={index}
                src={`/assets/landing/portfolio/${url}`}
                width={421}
                height={353}
                style={{ width: 421, height: 353 }}
              />
            );
          })}
        </div>
        <div className="relative -bottom-[1150px] h-80 bg-gradient-to-t from-[#d3e9f7] sm:hidden"></div>
        <Button
          typoVariant="title-semi-button"
          endIcon={<ChevronRight className="fill-white"/>}
          className="w-full mb-2 max-w-[300px] sm:max-w-[300px] h-[45px] shadow-buttonShadow4 absolute bottom-0 left-1/2 transform -translate-x-1/2y sm:hidden"
        >
          OUR PORTFOLIO
        </Button>
        
      </div>
    </Canvas>
  );
};
