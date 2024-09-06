import { Resume } from '../../../types/resume'

const data: Resume = {
  bio: {
    firstName: 'Ben',
    lastName: 'Merken',
    jobTitle: 'Fullstack webontwikkelaar',
    phone: {
      imgSrc: 'phone.svg',
      name: '+32 489 43 21 30',
    },
    email: {
      imgSrc: 'email.svg',
      name: 'ben.merken@gmail.com',
    },
    website: {
      imgSrc: 'github.svg',
      name: 'https://www.github.com/benmerken/',
    },
    hobbies: [
      { imgSrc: 'guitar.svg', name: 'Klassieke gitaar' },
      { imgSrc: 'books.svg', name: 'Lezen' },
    ],
  },
  education: [
    {
      institution: {
        name: 'Hogeschool PXL',
        location: 'Hasselt',
      },
      degree: {
        department: 'Digital',
        name: 'Professionele Bachelor in de Toegepaste Informatica: Applicatie-ontwikkeling',
      },
      period: {
        start: {
          month: 'september',
          year: '2017',
        },
        end: {
          month: 'februari',
          year: '2021',
        },
      },
    },
  ],
  certifications: [
    {
      institution: 'Amazon Web Services',
      name: '',
      date: 'Augustus 2021',
    },
  ],
  experience: [],
  skills: [
    {
      category: 'Programmeren',
      skills: ['TypeScript', 'React', 'Nextjs', 'Node.js'],
    },
    { category: 'Tools', skills: [] },
    { category: 'Cloud', skills: ['Amazon Web Services', 'Microsoft Azure'] },
  ],
}

export default data
