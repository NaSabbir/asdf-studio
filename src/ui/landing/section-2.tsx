import { Button, Canvas, Tag, Typography } from 'components';
import { padding } from '../../constants';
import { ChevronRight } from 'icons';
import Image from 'next/image';
import { Link } from 'react-scroll';

export const SectionTwo = () => {
  return (
    <Canvas classname="bg-main-deepBlue">
      <div
        id="development"
        className={[
          'max-w-mobile sm:max-w-desktop-s mx-auto w-full relative h-[1670px] 390:h-[1780px] 420:h-[1810px] 430:h-[1930px] sm:h-[1660px] x:h-[1700px] xl:h-[1560px]',
          padding,
        ].join(' ')}
      >
        <Image
          className="absolute top-[66px] left-[122px] z-10 hidden sm:block left-[40px] sm:top-[56px] xl:left-[150px]"
          src="/webapps@2x.png"
          width={498}
          height={134}
          alt="web apps"
          draggable={false}
        />
        <Image
          className="absolute top-[314px] left-5 z-10 sm:hidden"
          src="/webapps-mobile@2x.png"
          width={339}
          height={110}
          alt="web apps"
          draggable={false}
        />
        <Image
          className="absolute top-[66px] -right-[180px] z-10 hidden sm:block right-[-376px] x:right-[-266px] xl:right-[-166px]"
          src="/code@2x.png"
          width={722}
          height={255}
          style={{ width: 722, height: 255 }}
          alt="web apps"
          draggable={false}
        />
        <Image
          className="absolute top-[42px] left-5 z-10 sm:hidden max-w-[605px] w-[605px]"
          src="/code@2x.png"
          width={623}
          height={257}
          alt="web apps"
          draggable={false}
        />
        <Image
          className="absolute top-[213px] -left-[260px] z-10 hidden x:hidden xl:block"
          width={428}
          height={352}
          alt="vscode"
          src="/vscode@2x.png"
          draggable={false}
        />
        <div className="flex flex-col max-w-[494px] w-full px-5 absolute left-0 z-30 top-[420px] sm:left-[47px] sm:top-[300px] sm:px-0 xl:left-[247px]">
          <Typography variant="heading1" classname="text-white leading-normal">
            Development
          </Typography>
          <div className="flex flex-col gap-[21px]">
            <Typography variant="body1" classname="text-white">
              Highly skilled developers. Pixel perfect front-end implementation.
              Robust backend development. Everything you can hope for.
            </Typography>
            <div className="flex flex-wrap gap-[7.5px] w-[90%]">
              <Tag variant="white" text="Web Development" />
              <Tag variant="white" text="App Development" />
              <Tag variant="white" text="DevOps" />
              <Tag variant="white" text="CMS" />
              <Tag variant="white" text="E-Commerce" />
              <Tag variant="white" text="Data Science" />
            </div>
            <Link
              to={'contact_us'}
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              <Button
                typoVariant="title-semi-button"
                endIcon={<ChevronRight className="fill-white" />}
                className="w-full hover:bg-main-hoverOrange sm:w-[300px] h-[45px] shadow-buttonShadow4"
              >
                Start a Dev Project
              </Button>
            </Link>
          </div>
        </div>
        <Image
          className="absolute top-[673px] -left-[20px] z-10 hidden sm:block left-[10px] top-[683px]"
          width={322}
          height={306}
          style={{ width: 322, height: 306 }}
          alt="java"
          src="/java@2x.png"
          draggable={false}
        />
        {/* <Image
          className="absolute top-[1425px] right-[35px] z-30 sm:hidden"
          width={240}
          height={228}
          alt="mobile java"
          src="/assets/landing/mobile-java1.webp"
        /> */}
        <Image
          className="hidden sm:block absolute top-[579px] -right-[290px] z-0"
          width={397}
          height={262}
          alt="java"
          src="/oop@2x.png"
          draggable={false}
        />
        <Image
          className="absolute top-[1500px] left-[75px] z-0 hidden sm:block absolute top-[455px] left-[95px] z-0 x:top-[45px] left-[35px] z-0"
          width={1392}
          height={1195}
          alt="path"
          src="/path@2x.png"
          draggable={false}
        />
        {/* <Image
          className="absolute top-[344px] left-[315px] z-20 hidden sm:block top-[734px] sm:left-[-20px] xl:top-[384px] xl:left-[320px] z-20"
          width={956}
          height={1201}
          alt="laptop"
          src="/assets/landing/Development/laptop@2x.png"
        /> */}
        <object
          type="image/svg+xml"
          data="/Dev.svg"
          className="absolute top-[344px] left-[315px] z-10 hidden sm:block w-[710px] h-[928px] top-[734px] sm:left-[50px] xl:top-[384px] xl:w-[956px] xl:h-[1201px] xl:left-[320px]"
        ></object>
        <Image
          className="relative top-[910px] z-20 max-w-[492px] right-[59%] 360:max-w-[535px] 360:right-[52%] 375:max-w-[610px] 375:right-[67%] 420:max-w-[640px] 420:right-[230px] 430:min-w-[720px] 430:right-[280px] sm:hidden"
          width={640}
          height={768}
          alt="laptop"
          src="/mobile-laptop@2x.png"
          draggable={false}
        />
      </div>
    </Canvas>
  );
};
