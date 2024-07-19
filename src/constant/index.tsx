import GithubIcon from "../assets/contact/GithubIcon";
import GmailIcon from "../assets/contact/GmailIcon";
import LinkedinIcon from "../assets/contact/LinkedinIcon";
import HtmlIcon from "../assets/technologies/Html";
import CssIcon from "../assets/technologies/Css";
import TailwindcssIcon from "../assets/technologies/Tailwindcss";
import JavascriptIcon from "../assets/technologies/Javascript";
import TypescriptIcon from "../assets/technologies/Typescript";
import ReactIcon from "../assets/technologies/React";
import NodejsIcon from "../assets/technologies/Nodejs";
import MongoDbIcon from "../assets/technologies/MongoDb";
import CanvaIcon from "../assets/technologies/Canva";
import FigmaIcon from "../assets/technologies/Figma";
import ExpoIcon from "../assets/technologies/Expo";
import VscodeIcon from "../assets/technologies/Vscode";
import PostmanIcon from "../assets/technologies/Postman";
import NotionIcon from "../assets/technologies/Notion";
import FlutterIcon from "../assets/technologies/Flutter";
import DartIcon from "../assets/technologies/Dart";
import HiveIcon from "../assets/technologies/Hive";
import apihuntImage from "../assets/projects/apihunt.png";
import wordyImage from "../assets/projects/wordy.png";
import netcoinImage from "../assets/projects/netcoin.png";

export const navItems = [
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#project" },
];

const contactIconStyles = "h-8 w-8 sm:h-10 sm:w-10  lg:w-12 lg:h-12";

type contactIconType = {
  href: string;
  icon: JSX.Element;
  title: string;
};

export const contactIcons: contactIconType[] = [
  {
    href: "https://github.com/japoy143",
    title: "Github",
    icon: <GithubIcon className={contactIconStyles} />,
  },
  {
    href: "https://www.linkedin.com/in/rainierlesondato/",
    title: "LinkedIn",
    icon: <LinkedinIcon className={contactIconStyles} />,
  },
  {
    href: "https://mail.google.com",
    title: "rainierlesondato143@gmail.com",
    icon: <GmailIcon className={contactIconStyles} />,
  },
];

const iconStyles = "  h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 ";
const color = "#FFFFFF";

type IconsType = {
  techName: string;
  icon: JSX.Element;
};

export const webIcons: IconsType[] = [
  { techName: "HTML", icon: <HtmlIcon className={iconStyles} color={color} /> },
  { techName: "CSS", icon: <CssIcon className={iconStyles} color={color} /> },
  {
    techName: "Tailwindcss",
    icon: <TailwindcssIcon className={iconStyles} color={color} />,
  },
  {
    techName: "Javascript",
    icon: <JavascriptIcon className={iconStyles} color={color} />,
  },
  {
    techName: "Typescript",
    icon: <TypescriptIcon className={iconStyles} color={color} />,
  },
  {
    techName: "React",
    icon: <ReactIcon className={iconStyles} color={color} />,
  },
  {
    techName: "NodeJs",
    icon: <NodejsIcon className={iconStyles} color={color} />,
  },
  {
    techName: "MongoDB",
    icon: <MongoDbIcon className={iconStyles} color={color} />,
  },
];

export const designToolsIcon: IconsType[] = [
  {
    techName: "Canva",
    icon: <CanvaIcon className={iconStyles} color={color} />,
  },
  {
    techName: "Figma",
    icon: <FigmaIcon className={iconStyles} color={color} />,
  },
  {
    techName: "",
    icon: <div className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"></div>,
  },
  {
    techName: "",
    icon: <div className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"></div>,
  },
];

export const mobileIcons: IconsType[] = [
  {
    techName: "Javascript",
    icon: <JavascriptIcon className={iconStyles} color={color} />,
  },
  {
    techName: "Typescript",
    icon: <TypescriptIcon className={iconStyles} color={color} />,
  },
  {
    techName: "Tailwindcss",
    icon: <TailwindcssIcon className={iconStyles} color={color} />,
  },
  { techName: "Expo", icon: <ExpoIcon className={iconStyles} color={color} /> },
  {
    techName: "Nodejs",
    icon: <NodejsIcon className={iconStyles} color={color} />,
  },
  {
    techName: "MongoDB",
    icon: <MongoDbIcon className={iconStyles} color={color} />,
  },
];

export const mobileFlutterIcon: IconsType[] = [
  {
    techName: "Flutter",
    icon: <FlutterIcon className={iconStyles} color={color} />,
  },
  { techName: "Dart", icon: <DartIcon className={iconStyles} color={color} /> },
  { techName: "Hive", icon: <HiveIcon className={iconStyles} color={color} /> },
];

export const developmentIcons: IconsType[] = [
  {
    techName: "Vscode",
    icon: <VscodeIcon className={iconStyles} color={color} />,
  },
  {
    techName: "Postman",
    icon: <PostmanIcon className={iconStyles} color={color} />,
  },
  {
    techName: "Notion",
    icon: <NotionIcon className={iconStyles} color={color} />,
  },
  {
    techName: "",
    icon: <div className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"></div>,
  },
];

type projectAssetsType = {
  title: string;
  img: string;
  imgTitle: string;
  description: string;
  keywords: string[];
  view: string;
  viewType: string;
  githubUrl: string;
};

export const projectAssets: projectAssetsType[] = [
  {
    title: "WORDYWOODPICKER APP",
    img: wordyImage,
    imgTitle: "WORDYWOODPICKER APP",
    description:
      "The WORDYWOODPICKER game app is about Computer word guessing game that you have to guess a computer related word from the given randomize set of letters. The game app is created with the following technologies Flutter, Dart for the frontend and  Hive for the backend. ",
    keywords: ["Flutter", "Dart", "Hive"],

    view: "https://drive.google.com/drive/folders/1kas73bccGAyvgcoTSYwaOLx8DWy-A_fh?usp=sharing",
    viewType: "DownLoad Apk",
    githubUrl: "https://github.com/japoy143/Wordywoodpicker_app.git",
  },
  {
    title: "API HUNT",
    img: apihuntImage,
    imgTitle: "API HUNT",
    description:
      "The API Hunt is a web app that you can browse free api`s for your next projects. The web app is created with the following technologies React, Typescript and Tailwindcss for the frontend.  Nodejs, Express and Mongo Db for the backend.",
    keywords: [
      "React",
      "Typescript",
      "Tailwindcss",
      "NodeJs",
      "Express",
      "Mongo Db",
    ],
    view: "https://api-hunt.onrender.com",
    viewType: "View Live Site",
    githubUrl: "https://github.com/japoy143/api_hunt.git",
  },
  {
    title: "NETCOIN APP",
    img: netcoinImage,
    imgTitle: "NETCOIN APP",
    description:
      "The Netcoin app is a crypto currency app that will show real-time prices. The app can be use to convert crypto currency value to dollar prices. The app has statistics also for the 24 hour changes of the price. The  Netcoin app is created with the following technologies React Native, Expo, Typescript and Tailwindcss for the frontend and Nodejs, Express and Mongo Db for the backend.",
    keywords: [
      "React Native",
      "Expo",
      "Typescript",
      "NodeJs",
      "Express",
      "Mongo Db",
    ],
    view: "",
    viewType: "",
    githubUrl: "https://github.com/japoy143/netcoin_app.git",
  },
];
