/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shadman Khan",
  title: "Hello there, I'm Shadman",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with proven experience of building Web and Mobile applications using HTML / CSS / JavaScript / Reactjs / Nodejs /  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shaf8808",
  linkedin: "https://www.linkedin.com/in/shadman-khan-a4b8a2206/",
  gmail: "shadmankhan08@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "HIGHLY DRIVEN FULL STACK DEVELOPER NOT AFRAID TO DELVE INTO UNFAMILIAR TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Proficient in the backend of applications through technologies such as Python and Node.js"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Heroku / Netlify"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hertfordshire University",
      logo: require("./assets/images/herts-uni-logo.png"),
      subHeader: "IT Management in Business",
      duration: "September 2012 - April 2013",
      desc: "BSc(Hons)",
      descBullets: [
        "Enhance understanding of crucial business principles, organisational dynamics and system tools",
        "Learn about user-centric system design, technology trends, database management and mobile tech",
        "Develop Information System (IS) skills with a focus on commercial aspects such as the global business environment, finance, marketing, project management and organisational behaviour"
      ]
    },
    {
      schoolName: "Kingston University",
      logo: require("./assets/images/kingston-logo.png"),
      subHeader: "Marketing Management",
      duration: "September 2013 - April 2015",
      desc: "BSc(Hons)",
      descBullets: ["Covers key marketing theories and principles, brand strategy and development, digital marketing, advertising",
        "Equips students with the fundamental knowledge and understanding of the marketing eco-system and how to develop creative, digitally enhanced solutions",
        "Become familiar with the principles of marketing and marketing's core concepts as well as gain an in-depth understanding of the role and function of marketing in modern business"
      ]
    },
    {
      schoolName: "Code Institute",
      logo: require("./assets/images/code-institute-logo.webp"),
      subHeader: "Full Stack developer",
      duration: "November 2022 - December 2023",
      desc: "One of the only university credit-rated online coding bootcamps in the UK",
      descBullets: [
        "An in-depth, flexible, online coding course, with 600 hours of learning material over a 12 month period",
        "Delves into front-end software development and essential UX techniques, gaining proficiency in the top three programming languages: CSS, JavaScript, and Python",
        "Create a sophisticated front-end web app using the Python framework DRF and React which is favoured by companies such as Netflix, Airbnb and Instagram"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Full stack",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web developer",
      company: "Revitalize Innovations",
      companylogo: require("./assets/images/revitalize-logo.png"),
      date: "Jan 2024 – Present",
      desc: "Sole web developer for Revitalize creating visually appealing UI/UX using best practices",
      descBullets: [
        "Ensure the site is responsive across multiple devices through good responsive design practices",
        "Utilize a content management platform (Wix) to create and edit the site to meet client needs",
        "Apply my understanding of web accessibility and SEO to ensure the site performs well on search engines"
      ]
    },
    {
      role: "Radiology administrator",
      company: "4Ways",
      companylogo: require("./assets/images/4ways-logo.jpeg"),
      date: " Nov 2021 – Jan 2023",
      desc: "Recorded patient data with precision on IT systems",
      descBullets: [
        "Guaranteed accuracy of attached referrals with each patient before being scanned",
        "Built rewarding and long-lasting relationships with radiologists working for the company",
        "Promoted to specialist radiologist administrator position within less than a year"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF THE BIGGEST SOLO PROJECTS THAT I DEVELOPED AND DEPLOYED SUCCESSFULLY",
  projects: [
    {
      image: require("./assets/images/bloggerize-logo.png"),
      projectName: "Bloggerize",
      projectDesc: "My very own social media application built with React and DRF",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://django-rest-api-de0173352397.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/gamesguide-image.png"),
      projectName: "GamesGuide",
      projectDesc: "A modern gaming news site developed entirely with Django",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pp4-news-site-3458881b171b.herokuapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Scrimba",
      subtitle:
        "Completed Fundamentals of React on the Scrimba learning platform",
      image: require("./assets/images/scrimba-image.jpg"),
      imageAlt: "Scrimba logo",
    },
    {
      title: "Udemy",
      subtitle:
        "Underwent the web developer bootcamp which covered HTML, CSS, Javascript and Node.js",
      image: require("./assets/images/udemy-logo.png"),
      imageAlt: "Udemy logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? Feel free to reach out. ",
  number: "07487852984",
  email_address: "shadmankhan08@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
