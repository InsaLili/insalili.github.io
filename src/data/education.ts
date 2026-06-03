import type { Education } from './types';

export const education: Education[] = [
  {
    degree: 'Doctor of Philosophy',
    school: 'INSA de Lyon, University of Lyon, France',
    field: 'Computer Science — Human Computer Interaction',
    dateRange: 'September 2013 — May 2017',
    thesis: {
      title: 'Designing and analyzing collaborative activities in multi-surface environments',
      href: 'https://hal.archives-ouvertes.fr/tel-01580969/file/LiliTong_dissertation.pdf',
    },
  },
  {
    degree: 'Master of Science',
    school: 'Jilin University, Changchun, China',
    field: 'Electronic Engineering',
    dateRange: 'September 2010 — July 2013',
    note: 'Graduated with distinction',
  },
  {
    degree: 'Bachelor of Science',
    school: 'Jilin University, Changchun, China',
    field: 'Physics',
    dateRange: 'September 2006 — July 2010',
  },
];
