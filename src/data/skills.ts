import type { SkillGroup, SkillIcon } from './types';

export const skillIcons: SkillIcon[] = [
  { name: 'HTML5', icon: 'simple-icons:html5' },
  { name: 'CSS3', icon: 'simple-icons:css3' },
  { name: 'JavaScript', icon: 'simple-icons:javascript' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'Angular', icon: 'simple-icons:angular' },
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { name: 'Sass', icon: 'simple-icons:sass' },
  { name: 'Less', icon: 'simple-icons:less' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'npm', icon: 'simple-icons:npm' },
  { name: 'Gulp', icon: 'simple-icons:gulp' },
  { name: 'Git', icon: 'simple-icons:git' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Web Development',
    items: [
      'Web technologies: HTML, CSS, JavaScript, TypeScript, REST APIs',
      'JavaScript frameworks: React, Angular, Vue',
      'CSS preprocessors: Sass, LESS',
      'Build tools: Node.js, npm, webpack, Gulp',
      'Unit testing: Jest, Jasmine',
      'Git and GitFlow',
      'Cloud service: Azure, Heroku',
    ],
  },
  {
    title: 'Workflow',
    items: [
      'Agile Development & Scrum',
      'Cross Functional Teams',
      'Responsive Design',
      'Cross Browser Testing & Debugging',
      'Azure DevOps',
    ],
  },
  {
    title: 'User Experience (UX)',
    items: [
      'Design: wire-framing, storyboarding, mockups',
      'Quantitative research: data-driven investigation, observational and experimental studies',
      'Qualitative research: questionnaire, interview, user observation and coding',
    ],
  },
  {
    title: 'Languages',
    icon: 'lucide:globe',
    items: [
      'English (working professional)',
      'French (conversational)',
      'Dutch (beginner)',
      'Mandarin (native)',
    ],
  },
];
