import DetailsSVG from "assets/icons/details.svg";
import ContactSVG from "assets/icons/contact.svg";
import BusinessSVG from "assets/icons/business.svg";
import ProfileSVG from "assets/icons/profile.svg";
import LocaleSVG from "assets/icons/locale.svg";
import HeartSVG from "assets/icons/heart.svg";
import CheckedSVG from "assets/icons/checked.svg";
import LoginSVG from "assets/icons/login.svg";
import LogoutSVG from "assets/icons/logout.svg";

const baseNav = [
  {
    label: "ჩვენს შესახებ",
    icon: DetailsSVG,
    id: "nav-route__1",
  },
  {
    label: "კონტაქტი",
    icon: ContactSVG,
    id: "nav-route__2",
  },
  {
    label: "ბიზნესისათვის",
    icon: BusinessSVG,
    id: "nav-route__3",
  },
  {
    label: "ქართ/ENG",
    icon: LocaleSVG,
    id: "nav-route__4",
  },
];

const authorizedNav = [
  {
    label: "პროფილი",
    icon: ProfileSVG,
    id: "authorized-nav-route__1",
  },
  {
    label: "ფავორიტები",
    icon: HeartSVG,
    id: "authorized-nav-route__2",
  },
  {
    label: "უკვე ეწვიე",
    icon: CheckedSVG,
    id: "authorized-nav-route__3",
  },
];

export { baseNav, LoginSVG, LogoutSVG, authorizedNav };
