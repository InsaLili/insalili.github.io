import type { Experience } from './types';
import uberLogo from '../assets/Uber_logo.svg';
import abbLogo from '../assets/ABB_logo.png';
import philipsLogo from '../assets/Philips_logo.png';
import bdoLogo from '../assets/BDO_logo.png';
import lenovoLogo from '../assets/Lenovo_logo.png';
import insaLogo from '../assets/INSA_logo.png';

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    org: 'Uber',
    location: 'Amsterdam, Netherlands',
    logo: uberLogo,
    logoAlt: 'Uber',
    dateRange: 'January 2025 — Present',
    paragraphs: [
      "I work in the Developer Platform team to design and develop Uber's internal tools to improve the developer experience.",
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'ABB E-mobility',
    location: 'Eindhoven, Netherlands',
    logo: abbLogo,
    logoAlt: 'ABB',
    dateRange: 'November 2022 — December 2024',
    paragraphs: [
      'As a Tech Lead, I spearheaded the development and deployment of EV charging web applications that support more than 50,000 DC fast chargers across 85 global markets. In this role, I ensured the scalability, reliability, and performance of the solutions, driving both technical excellence and business impact.',
      'In the absence of a Product Owner, I stepped in as a proxy PO, working directly with stakeholders to clarify requirements, manage the product backlog, and set clear priorities for the team. This dual role allowed me to bridge business and engineering needs effectively, ensuring smooth progress and alignment across projects.',
      'On the technical side, I worked on the web-based charging application as well as an HMI customization tool that enables customers to create tailored charging interfaces for their stations. I focused on improving both performance and usability, delivering a more responsive user experience. Within just four months, I successfully migrated the charging application from JavaScript to Qt and designed the architecture of the new Qt application to ensure long-term scalability and stability.',
    ],
    stack: 'TypeScript, Node.js, C++, Qt, Docker, Azure',
  },
  {
    role: 'Frontend Developer',
    org: 'Philips Research',
    location: 'Eindhoven, Netherlands',
    logo: philipsLogo,
    logoAlt: 'Philips',
    dateRange: 'October 2020 — October 2022',
    paragraphs: [
      'I collaborated with a talented multi-disciplinary team to design and develop a clinical prototype on patient monitors, aimed at assisting nurses in analyzing patient conditions and speeding up diagnosis.',
      'As a key member of the team, I also worked closely with the UX team to ensure that the clinical application was user-friendly and easy to navigate. This involved incorporating user interface design principles to create responsive web pages that met the design requirements of the clinical application.',
      'We delivered high-quality code with over 85% test coverage, including unit tests and end-to-end tests, to fulfill the rigorous medical software standards. By conducting thorough testing and debugging, we ensured that the prototype was reliable, efficient, and safe for patients and healthcare providers.',
      'I am proud to have played a vital role in the development of this cutting-edge clinical prototype, which will improve patient care and assist healthcare providers in delivering critical services.',
    ],
    stack: 'React, TypeScript, Remix.run, Cypress, Jest, Storybook',
  },
  {
    role: 'Frontend Developer',
    org: 'BDO Global IT',
    location: 'Eindhoven, Netherlands',
    logo: bdoLogo,
    logoAlt: 'BDO',
    dateRange: 'December 2017 — September 2020',
    paragraphs: [
      'As a member of a Scrum team, I played a critical role in designing and developing several products that are used by our auditors across 150+ countries worldwide. This involved working collaboratively with cross-functional teams to identify and understand user requirements, and then using my expertise in front-end web development to create intuitive and engaging user interfaces.',
      'I was also the principal developer of our UI library. This library is a set of reusable React components that streamlines our front-end development process, reduces development time, and ensures consistency across our products. In addition, the library has helped to maintain a cohesive and aligned corporate visual identity, making it easier for our users to recognize and navigate our products.',
    ],
    stack: 'React, TypeScript, LESS, Sass, Jest, AngularJS, webpack, Jasmine, .NET, C#',
  },
  {
    role: 'UX Researcher',
    org: 'Lenovo',
    location: 'Beijing, China',
    logo: lenovoLogo,
    logoAlt: 'Lenovo',
    dateRange: 'May 2017 — November 2017',
    paragraphs: [
      'At Lenovo, I collaborated with a diverse group of researchers, designers, and developers to design and develop a novel system for Augmented Reality interactions.',
      'Through this experience, I discovered my passion for programming in an industry setting. I found that my skills and interests were better suited for industry instead of academia, where I could work on projects that had a more direct impact on businesses and end-users.',
    ],
  },
  {
    role: 'PhD Researcher',
    org: 'Laboratory LIRIS',
    location: 'Lyon, France',
    logo: insaLogo,
    logoAlt: 'INSA Lyon',
    dateRange: 'September 2013 — May 2017',
    paragraphs: [
      'As a PhD researcher, my primary research interest was in the area of Human-Computer Interaction, which focused on exploring interaction, collaboration, and applications in multi-surface environments.',
      'I designed and developed several web-based applications. This was also when my passion for frontend technologies started.',
    ],
  },
];
