// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import javaLogo from './assets/tech_logo/java.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import workbench from './assets/tech_logo/workbench.jpg'





// Education Section Logo's
import CDAC from './assets/education_logo/CDAC.jpg';
import kce from './assets/education_logo/kce.jpg';


// Project Section Logo's





export const SkillsInfo = [
  {
    title: 'Programming Languages:',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'MySQL', logo: mysqlLogo },
      
    ],
  },
  {
    title: 'Frameworks / Libraries',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Springboot', logo: springbootLogo },
     
    ],
  },
  
  {
    title: 'Tools',
    skills: [
    
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      {name : "Workbench", logo: workbench},
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: CDAC,
      school: " Centre for Development of Advanced Computing (CDAC), Pune",
      date: "Feb-2025 - Aug-2025",
      desc: "I completed my CDAC PG-DAC from Pune. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, as well as Java, Spring Boot, and React."
    },
    {
      id: 1,
      img: kce,
      school: " K.C.E. Society’s College of Engineering and Management, Jalgaon",
      date: "Jun 2020 - July 2024",
      desc: "I completed my B.Tech in Computer Engineering from KCE College of Engineering and Management, Jalgaon. During my studies, I explored key areas like Data Structures and Algorithms, Web Development, and Database Management Systems, which strengthened my foundation in software development.",
      degree: "B.Tech (Computer Science)",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ParkZone",
      description:
        "ParkZone is a software application designed to digitally manage vehicle parking operations within an area such as a parking lot, mall, office complex, hospital, or apartment. It automates tasks like entry and exit logging, slot booking, parking charges, and reporting.",
      
      tags: ["JavaEE", "ReactJS", "MySQL", "MS.NET"],
    /* github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/", */
    },
    {
      id: 1,
      title: "Sentimental analysis aiding depression using machine learning	",
      description:
        "It uses the Text2Emotion library to extract emotions like sadness, fear, and anger from text. The key objectives include developing an accurate and efficient model to distinguish between positive, neutral, and depressive sentiments in the text. The system stores user history, sends personalized email reports, and recommends psychiatric help if depressive symptoms are detected.",
 
      tags: [" Python", "Html", "Css"],
      
    },

    {
      id: 2,
      title: "Weather App",
      description:
        "Fetches real-time weather data from OpenWeatherMap API and displays temperature, humidity, wind speed, and conditions dynamically.",
 
      tags: [" React", "Java"],
      
    },
    
    
    
    
  ];  