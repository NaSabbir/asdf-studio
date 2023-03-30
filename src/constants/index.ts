import { Colors } from "components";

export const padding = "px-5 sm:px-0";
export const screen = `max-w-desktop-hd mx-auto w-full ${padding}`;
export const responsiveScreen = `max-w-desktop-hd mx-auto w-full overflow-hidden`;

type Data = {
  color: Colors;
  comment: string;
  name: string;
  position: string;
};

export const userComments: Data[] = [
  {
    color: "blue",
    comment:
      "Thank you very much for your kind support for my application design. I would highly recommend Airly Studio for any design related applications. I am looking forward to work with them again.",
    name: "Venkat Rao Y.",
    position: "Operation Manager, IACE",
  },
  {
    color: "orange",
    comment:
      "Airly team is pretty much self-managed altogether. Will turn your existing website and turn it into a million-dollar design. They are our go-to guys for everything related to creative designs.",
    name: "Klaus Schmidt",
    position: "Head of Marketing, Aptly GmbH",
  },
  {
    color: "green",
    comment:
      "The Airly team gave me the exact output I required. I forgot to mention some parts of the work in the description, I mentioned it later and they completed that as well.",
    name: "Shehadi D.",
    position: "Global Solutions Architect, Erricson",
  },
  {
    color: "lightBlue",
    comment:
      "Excellent job as always. Very enjoyable to work with and extremely talented and professional. Fantastic work, quick turnover, very creative and supportive.",
    name: "Adam Voigt",
    position: "Founder, Real Schools",
  },
  {
    color: "deepBlue",
    comment:
      "4th project with Airly Studio - great to work with and great results! Already hired them again for another project and hopefully, we will continue working together.",
    name: "Chomkwan Wattana",
    position: "Creative Director, Warrior Forum",
  },
  {
    color: "skyBlue",
    comment:
      "Absolutely great experience working with Airly Studio. Understood the brief, got to work quickly, and delivered an excellent piece of design work. Will definitely hire again.",
    name: "Rob K.",
    position: "VP, Datonics",
  },
  {
    color: "red",
    comment:
      "Dealing with these guys was a breeze - and they never ever overcharged for this and that! True professional! We also were very happy with the job!",
    name: "Lena S.",
    position: "Sr. Executive, Evidenced",
  },
  {
    color: "ashBlue",
    comment:
      "Leaving a lot of questions unanswered. The Airly Studio team saw this difficulty and stepped up to the table without hesitation. A+ work!",
    name: "Kavin Hanner",
    position: "Founder, StreetLeap",
  },
];
