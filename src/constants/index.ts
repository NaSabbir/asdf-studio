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
      "Hire [asdf]studio! What an amazing experience.  We had some designs for an application we wanted professional finishing on. Not only did the team make our pages look outstanding, they interpreted the designs to improve the overall UI and UX.  Because the designs were so good, \what started as a redesign for a single page, turned into a complete redesign of our entire site. We could not be happier. Emily is very communicative, delivers on time, asks questions to make sure the team is meeting expectations, and was flexible and friendly throughout! Thank you!",
    name: "Patrick Dempsey",
    position: "Director of Digital Teaching and Learning, University of Maryland",
  },
  {
    color: "orange",
    comment:
      "[asdf]studio is SUCH a pleasure to work with. Not only do they complete work in a timely manner but go above and beyond to make sure the work is quality work. I would recommend them to anyone looking for a freehand designer that is willing to take on all sorts of projects and will continue to work with her in the future. So happy I came across [asdf]studio’s work!",
    name: "",
    position: "",
  },
  {
    color: "green",
    comment:
      "Emily and her team have been a joy to work with! They're communicative and provide high-quality designs. They always meet our deadlines even if we have any last-minute requests. I highly recommend working with [asdf]studio if you need any help with marketing or web design.",
    name: "Autumn Tran",
    position: "Lead Designer, SalesHood",
  },
  {
    color: "lightBlue",
    comment:
      "Emily and her team are phenomenal! Emily is super responsive and the quality of her team's work is excellent. Feedback is also incorporated efficiently. Would definitely work with Emily and her team again!",
    name: "Stephen Chen",
    position: "Founder, Pre-Launch Startup",
  },
  {
    color: "deepBlue",
    comment:
      "Great process for gathering initial requirements. Worked autonomously. Provided high quality work on short timelines. Was responsive to feedback. Definitely hiring again.",
    name: "Mase Graye",
    position: "Founder, Pre-Launch Startup",
  },
  {
    color: "skyBlue",
    comment:
      "Emily and the team did a great job. We provided a list of tasks to increase our website speed and they provided an estimated time for completion. Once hired they completed the work under their estimated time and with great success. Definitely would hire them again.",
    name: "Meg Reeder",
    position: "Content and Brand Development Coordinator, West Pro Roofing",
  },
  {
    color: "red",
    comment:
      "Emily and her team were excellent to work with. I really enjoyed working with Emily as her communication was never an issue, met or exceeded all deadlines, and the work that was produced was top-notch. They understood exactly what we were looking for and delivered an amazing UX/UI design for our website. Would hire Emily and her team again! Thank you!",
    name: "Kevin Lee",
    position: "Global Director of eCommerce, ColArt",
  },
  // {
  //   color: "ashBlue",
  //   comment:
  //     "Leaving a lot of questions unanswered. The Airly Studio team saw this difficulty and stepped up to the table without hesitation. A+ work!",
  //   name: "Kavin Hanner",
  //   position: "Founder, StreetLeap",
  // },
];
