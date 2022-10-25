import rec from "../Images/Rectangle 1270 (3).svg";
import rec1 from "../Images/Rectangle 1270 (4).svg";
import barChart from "../Images/Group 209.svg";
import pieChart from "../Images/Group 222.svg";
import check from "../Images/Group 210.svg";
import star1 from "../Images/star (1).svg";
import star from "../Images/star.svg";
import sun from "../Images/sun.svg";

export const Data = [
  {
    image: <img src={rec} alt="" />,
    image1: <img src={barChart} alt="" />,
    header:
      "We connect our customers with the best, and help them keep up-and stay open.",
    check: <img src={check} alt="" />,
    paragraph: "We connect our customers with the best.",
    check1: <img src={check} alt="" />,
    paragraph1: "Advisor success customer launch party.",
    check2: <img src={check} alt="" />,
        paragraph2: "Business-to-consumer long tail.",
    But: 'Start now'
  },
  {
    image: <img src={rec1} alt="" />,
    image1: <img src={pieChart} alt="" />,
    header:
      "We connect our customers with the best, and help them keep up-and stay open.",
    check: <img src={star1} alt="" />,
    paragraph: "We connect our customers with the best.",
    check1: <img src={star} alt="" />,
    paragraph1: "Advisor success customer launch party..",
    check2: <img src={sun} alt="" />,
      paragraph2: "Business-to-consumer long tail.",
  },
];
