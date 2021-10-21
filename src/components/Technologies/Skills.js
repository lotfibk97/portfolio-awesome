import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "django",
    Component: DiAndroid,
    title: "Django",
    Description: () => <>My favourite framework, Django offers a lot of tools without being more complcated than necessary.</>,
  },
  {
    slug: "python",
    Component: RiFlutterFill,
    title: "Python",
    Description: () => <>My main language, Python is one of the most popular language today. </>,
  },
  {
    slug: "linux",
    Component: SiJava,
    title: "Linux",
    Description: () => <>I have been working on linux environments for more than 8 years.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written dozens of Shell scripts for various purposes.</>,
  },
  {
    slug: "postgresql",
    Component: SiFirebase,
    title: "PostgreSQL",
    Description: () => <>I have used PostgreSQL in all of my large scale web apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
