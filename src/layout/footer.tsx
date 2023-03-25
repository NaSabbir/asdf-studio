import { Canvas, FooterCard, Typography } from "components";
import { padding } from "../constants";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <Canvas classname="bg-lightBlue">
      <div
        className={[
          "relative max-w-[1180px] 2xl:max-w-[1260px] w-full mx-auto z-20 pt-[60px]",
          padding,
        ].join(" ")}
      >
        <div className="flex flex-col max-w-[585px] w-full gap-[13px] sm:gap-[6.3px] z-30 items-center sm:items-start sm:ml-[30px]">
          <div className="relative w-fit">
            <Typography
              variant="heading4"
              classname="text-main-deepBlue opacity-35"
            >
              Let’s Connect
            </Typography>
            <Image
              src={"/assets/landing/Footer/thunder@2x.png"}
              width={60}
              className="absolute -right-[55px] -top-[25px]"
              height={78}
              alt="hearth emoji"
            />
          </div>

          <Typography
            variant="heading4"
            classname=" text-main-deepBlue text-center sm:text-start"
          >
            Let us simplify the process of navigating the challenges in
            developing innovative digital products for you.
          </Typography>
        </div>
        <div className="h-[45px]" />
        {/* <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start gap-y-[30px]">
          <FooterCard
            image={{
              path: "calendar@2x.png",
              width: 188,
              height: 112,
            }}
            title="Schedule a Meeting"
            desc="Let’s schedule a 15-minutes free consultation call. We are very eager to hear from you and collaborate"
            buttonText="schedule"
          />
          <FooterCard
            image={{
              path: "message@2x.png",
              width: 112,
              height: 112,
            }}
            title="Send Message"
            desc="Send us an in-site message and start live chatting."
            buttonText="message"
          />
          <FooterCard
            image={{
              path: "email@2x.png",
              width: 112,
              height: 112,
            }}
            title="Email"
            buttonText="send email"
            desc="Send us an email about your project and we will get back to you as soon as possible."
          />
        </div> */}

        <div className="flex gap-[37.5px] flex-wrap sm:flex-row justify-around">
          <FooterCard
            image={{
              path: "calendar@2x.png",
              width: 188,
              height: 112,
            }}
            title="Schedule a Meeting"
            desc="Let’s schedule a 15-minutes free consultation call. We are very eager to hear from you and collaborate"
            buttonText="schedule"
          />
          <FooterCard
            image={{
              path: "message@2x.png",
              width: 112,
              height: 112,
            }}
            title="Send Message"
            desc="Send us an in-site message and start a live chat."
            buttonText="message"
          />
          <FooterCard
            image={{
              path: "email@2x.png",
              width: 112,
              height: 112,
            }}
            title="Email"
            buttonText="send email"
            desc="Send us an email about your project and we will get back to you as soon as possible."
          />
        </div>

        <div className="flex flex-col mt-[33px] sm:mt-[52px]">
          <div className="flex sm:gap-[22px] gap-5 mx-auto flex-col sm:flex-row items-center sm:items-start">
            <Link href="#design">
              <Typography
                classname="uppercase text-main-deepBlue font-medium"
                variant="label2"
              >
                Design
              </Typography>
            </Link>
            <Link href="#development">
              <Typography
                classname="uppercase text-main-deepBlue font-medium"
                variant="label2"
              >
                Development
              </Typography>
            </Link>
            <Link href="#marketing">
              <Typography
                classname="uppercase text-main-deepBlue font-medium"
                variant="label2"
              >
                Marketing
              </Typography>
            </Link>
            <Link href="#clients">
              <Typography
                classname="uppercase text-main-deepBlue font-medium"
                variant="label2"
              >
                Clients
              </Typography>
            </Link>
            <Link href="#process">
              <Typography
                classname="uppercase text-main-deepBlue font-medium"
                variant="label2"
              >
                Process
              </Typography>
            </Link>
            <Link href="#testimonials">
              <Typography
                classname="uppercase text-main-deepBlue font-medium"
                variant="label2"
              >
                Testimonials
              </Typography>
            </Link>
            <Link href="#contact_us">
              <Typography
                classname="uppercase text-main-deepBlue font-medium"
                variant="label2"
              >
                Contact Us
              </Typography>
            </Link>
          </div>
          <div className="max-w-[322px] w-full mx-auto text-center mt-[24px]">
            <Typography variant="body2" classname="text-main-deepBlue">
              Suite 4C Origin, Spring Gardens, Manchester, M2 2BQ, UK 44/A Judge
              Court Road, Cumilla, Bangladesh
            </Typography>
          </div>
          <div className="max-w-[477px] w-full mx-auto text-center mt-[10px]">
            <Typography variant="body2" classname="text-main-deepBlue">
              © 2014-2022 Airly Studio, LLC. All rights reserved. Trademarks and
              brands are the property of their respective owners.
            </Typography>
          </div>
        </div>
        <Image
          src={"/assets/landing/Footer/footer@2x.png"}
          width={1080}
          height={351}
          alt="footer"
          className="mx-auto hidden sm:block"
        />
        <Image
          src={"/assets/landing/Footer/footer-mobile@2x.png"}
          width={360}
          height={335}
          alt="footer"
          className="mx-auto sm:hidden"
        />
      </div>
    </Canvas>
  );
};
