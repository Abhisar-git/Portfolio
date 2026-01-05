export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name : "Resume" , link : "https://drive.google.com/file/d/1-0pBwmPd3lEzYv0a-pJSw7AptqOBDhiG/view?usp=drive_link"}
];

export const gridItems = [
  {
    id: 1,
    title: "Building Full-Stack Solutions from Concept to Deployment",
    description: "I enjoy working on all layers of an application, from designing the database schema with MongoDB to creating a pixel-perfect, interactive UI with React and Next.js.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-base",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "AI & Machine Learning Enthusiast",
    description: "Exploring ways to integrate intelligent features into modern web applications.",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start text-sm",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Core Tech Stack",
    description: "Always learning and expanding my toolkit.",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center text-sm",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A Passion for Performance and Efficiency",
    description: "My work with C++ for web scraping has solidified my understanding of low-level optimization and memory management.",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1 overflow-hidden",
    imgClassName: "w-40 h-40",
    titleClassName: "justify-start text-sm",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "From MERN Stack Blogs to High-Speed Scrapers",
    description: "A look at my project experience.",
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-64 w-40",
    titleClassName: "justify-center md:justify-start lg:justify-center text-sm",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have an opportunity in mind? Let's connect.",
    description: "",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center text-center text-sm",
    img: "",
    spareImg: "",
  },
];
export const Projects = [
  {
    id: 1,
    title: "Full-Stack Blog Platform (MERN)",
    des: "A complete blog website built with the MERN stack, featuring a RESTful API, user authentication, and a dynamic React front-end for creating and managing posts.",
    img: "/p_blog.svg", // Replace with your project screenshot
    iconLists: ["/re.svg", "/node.svg", "/express.svg", "/mongo.svg", "/tail.svg"],
    link: "https://github.com/your-username/mern-blog-repo", // Replace with your GitHub link
  },
  {
    id: 2,
    title: "High-Performance Web Scraper (C++)",
    des: "A command-line web scraping tool built in C++ for maximum performance and efficiency in extracting data from complex HTML structures.",
    img: "/p_scraper.svg", // Replace with your project screenshot
    iconLists: ["/cpp.svg"],
    link: "https://github.com/your-username/cpp-scraper-repo", // Replace with your GitHub link
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Blog Platform (MERN)",
    desc: "Developed and deployed a complete blog platform from scratch using the MERN stack, featuring a RESTful API and a dynamic React front-end for content management.",
    className: "md:col-span-1",
    thumbnail: "/exp_blog.svg", // You'll need to create this icon
  },
  {
    id: 2,
    title: "High-Performance Web Scraper (C++)",
    desc: "Engineered an efficient web scraping tool in C++ to extract and parse data from websites, focusing on performance and effective memory management.",
    className: "md:col-span-1",
    thumbnail: "/exp_scraper.svg", // You'll need to create this icon
  },
];
export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/Abhisar-Git"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/your-twitter-username", // Add your X/Twitter link
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/your-linkedin-profile", // Add your LinkedIn link
  },
  {
    id: 4,
    img: "/leetcode.svg",
    link: "https://www.leetcode.com/in/your-linkedin-profile", // Add your LinkedIn link
  }
];
