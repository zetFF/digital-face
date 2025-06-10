import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Afkar",
  initials: "Zee",
  url: "https://dillion.io",
  location: "Indonesia, Yogyakarta",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'am a Web Developer who focuses on Frontend and UI UX Designer.",
  summary:
    "I'm a website developer and user interface designer. Currently, I work as a self-employed frontend developer, specializing in creating impressive websites that boost business. am a Web Developer who focuses on Frontend and UI UX Designer. I learned about Frontend art world since 2022 until now. I am able to use JavaScript Framework technology and UI Library.",
  avatarUrl: "/zet.png",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "HTML",
    "CSS",
    "Laravel",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ebdtv4@gmail.com",
    tel: "+6288980972922",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zetFF",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "Showwcase",
        url: "https://www.showwcase.com/afkar",
        icon: Icons.linkedin,

        navbar: true,
      },
      showwcase: {
        name: "Showwcase",
        url: "https://www.showwcase.com/afkar",
        icon: Icons.showwcase,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@melodicnine",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT Globalintermedia Nusantara",
      href: "https://globalintermedia.co.id",
      badges: [],
      location: "Office",
      title: "UI UX Designer",
      logoUrl: "/globalintermedia.png",
      start: "July 2024",
      end: "Dec 2024",
      description:
        " Creating Government-based Application Mockups. with several examples of existing Application implementations and made into Mockups for Data reports.",
    },
  ],
  education: [
    {
      school: "Elementary School Timuran Yogyakarta",
      href: "https://www.instagram.com/galeri_sdtimuran/",
      degree: "Students",
      logoUrl: "/timuran.png",
      start: "2013",
      end: "2018",
    },
    {
      school: "Junior High School 13 Yogyakarta",
      href: "https://smpn13-yog.sch.id/",
      degree: "Students",
      logoUrl: "/smp13.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Vocational High School Muhammadiyah 1 Yogyakarta",
      href: "https://smkmuh1-yog.sch.id/",
      degree: "Students",
      logoUrl: "/muhi.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Re4ctx Todos",
      href: "https://github.com/zetFF/re4ctx-todo.git",
      dates: "Mar 20, 2025 - Active",
      active: true,
      description:
        "this is a repository of Website-based TodoList Applications with Laravel Breeze Inertia React Technology Support. with UI integration from Shadcn UI. this application was developed to support the advancement of School graduation Proposals and Graduation Projects.",
      technologies: [
        "Laravel",
        "React",
        "Javascript",
        "Inertia",
        "PHP",
        "MySQL",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/zetFF/all-stack-admin.git",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/re4ctx.png",
    },
    {
      title: "Todo-Board",
      href: "https://github.com/zetFF/todo-board.git",
      dates: "Feb 27, 2025 - Active",
      active: true,
      description:
        "This repository is a TodoList Website Application. this application was created with the aim of being a requirement for graduation from my school. This application was developed with Laravel Blade Technology",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/zetFF/todo-board.git",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zetFF/todo-board.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/TodoSpace.png",
    },

    {
      title: "Mockup KIP KAPUAS",
      href: "https://www.figma.com/design/vZ72tHWCWVVidZfJdqcjhv/KIP-KAPUAS?t=ByoUDeIgyDQPsbjj-1",
      dates: "July 2024, - Active",
      active: true,
      description:
        "KIP KAPUAS is a mobile application designed to provide information on the Indonesia, Kapuas region with various forms of information, ranging from Radio, News, and other information.",
      technologies: ["Figma"],
      links: [
        {
          type: "Mockup",
          href: "https://www.figma.com/design/vZ72tHWCWVVidZfJdqcjhv/KIP-KAPUAS?t=ByoUDeIgyDQPsbjj-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kip-kapuas.png",
    },
    {
      title: "Mockup SIPD edb_gis",
      href: "https://www.figma.com/design/fwt9dcvRqhxy4mN3n39vO9/Mockup-design-SIPD-ebd_gis---prototype?t=ByoUDeIgyDQPsbjj-1",
      dates: "Juny 2024, - Active",
      active: true,
      description:
        "SIPD edb_gis is a Dashboard designed to analyze the results of the Ministry of Home Affairs data. This project is a Mockup design with a new Design.",
      technologies: ["Figma"],
      links: [
        {
          type: "Mockup",
          href: "https://www.figma.com/design/vZ72tHWCWVVidZfJdqcjhv/KIP-KAPUAS?t=ByoUDeIgyDQPsbjj-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sipd.png",
    },
    {
      title: "System Development NUDP",
      href: "https://www.figma.com/design/MovVbgFgboQkRXVwk0Ax2s/Mockup-Sysdev?node-id=1401-14131&t=spu2WCdiCtpMHe7v-1",
      dates: "Mar 24, 2025 - Active",
      active: true,
      description:
        "NUDP stands for National Urban Development Project or in Indonesian it is called the National Urban Development Project. This project was developed by the Indonesian Government in collaboration with the World Bank. NUDP has been implemented since 2020 and will be completed in December 2024 (duration around 5 years).",
      technologies: ["Mockup"],
      links: [
        {
          type: "Mockup",
          href: "https://www.figma.com/design/MovVbgFgboQkRXVwk0Ax2s/Mockup-Sysdev?node-id=1401-14131&t=spu2WCdiCtpMHe7v-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sysdev.png",
    },
    {
      title: "Wedding Website",
      href: "https://github.com/zetFF/WeddWeb.git",
      dates: "February 2025 - Active",
      active: true,
      description:
        "A Wedding Website is a wedding invitation in the form of a website, which is designed from the perspective of the guest and the website owner.",
      technologies: [
         "Laravel",
        "React",
        "JavaScript",
        "Inertia",
        "PHP",
        "MySQL",
        "Shadcn UI",
         "Filament",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/zetFF/WeddWeb.git",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/wedding.png",
    },
    {
      title: "Foodly-Marketplace",
      href: "https://github.com/zetFF/foodly-marketplace.git",
      dates: "Mar 24, 2025 - Active",
      active: true,
      description:
        "A food marketplce website application designed for visual frontend and design. This application is not integrated with any database. The technology that supports this application is React Vite typscript",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Lovable",
        "vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/zetFF/foodly-marketplace.git",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Foodly.png",
    },
  ],

  hackathons: [
    {
      title: "Design Website",
      dates: "Februari 23rd - 25th, 2023",
      location: "Vocational High School Muhammadiyah 3 Yogyakarta",
      description:
        "1st place in the City Branch of Website Design OlympicAD Selection SMA/MA/SMK Yogyakarta City",
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Industrial Practice Work",
      dates: "July 1th - Dec 31th, 2024",
      location: "PT Globalintermedia Nusantara, Tamansiswa",
      description:
        "Industrial Practice Work at PT Globalintermedia Nusantara from July 1, 2024 to December 21, 2024",
      icon: "public",
      image:
        "https://biroka.unjaya.ac.id/logo/hVnHBAbq-20230526-company-logo.jpeg",
      links: [],
    },
    {
      title: "Cyber Security Seminar",
      dates: "26 July 2023",
      location: "UNISA",
      description:
        "participation as “Participant” in the National Seminal activity with the theme “Have you Prepared Against Cyber Attacks?” organized by the Information Technology Study Program, Faculty of Science and Technology, University of 'Aisyiyah Yogyakarta on July 26, 2023.",
      image: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
  ],
} as const;
