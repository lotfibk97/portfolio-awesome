import { DiAndroid, DiTerminal, DiDjango, DiPython, DiPostgresql } from "react-icons/di";
import { SiGit, SiPostgresql } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

export const Skills = [
  {
    slug: "django",
    Component: DiDjango,
    title: "Django",
    Description: () => <>My favourite framework, Django offers a lot of tools without being more complcated than necessary.</>,
  },
  {
    slug: "python",
    Component: DiPython,
    title: "Python",
    Description: () => <>My main language, Python is one of the most popular language today. </>,
  },
  {
    slug: "linux",
    Component: FcLinux,
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
    Component: SiPostgresql,
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
