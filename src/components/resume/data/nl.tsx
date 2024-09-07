import EmailSVG from './svg-components/email';

import { Resume } from '../../../types/resume';
import BooksSVG from './svg-components/books';
import ColumnSVG from './svg-components/colmn';
import GithubSVG from './svg-components/github.';
import GuitarSVG from './svg-components/guitar';
import PhoneSVG from './svg-components/phone';

const data: Resume = {
  bio: {
    firstName: 'Ben',
    lastName: 'Merken',
    jobTitle: 'Fullstack webontwikkelaar',
    phone: {
      svg: <PhoneSVG />,
      name: '+32 489 43 21 30'
    },
    email: {
      svg: <EmailSVG />,
      name: 'ben.merken@gmail.com'
    },
    website: {
      svg: <GithubSVG />,
      name: 'https://www.github.com/benmerken/'
    },
    hobbies: [
      { svg: <GuitarSVG />, name: 'Klassieke gitaar' },
      { svg: <ColumnSVG />, name: '(Oude) Geschiedenis' },
      { svg: <BooksSVG />, name: 'Lezen' }
    ]
  },
  education: [
    {
      institution: {
        name: 'Hogeschool PXL',
        location: 'Hasselt'
      },
      degree: {
        department: 'Digital',
        name: 'Professionele Bachelor in de Toegepaste Informatica: Applicatie-ontwikkeling'
      },
      period: {
        start: {
          month: 'september',
          year: '2017'
        },
        end: {
          month: 'februari',
          year: '2021'
        }
      }
    }
  ],
  certifications: [
    {
      institution: 'Amazon Web Services',
      name: '',
      date: 'Augustus 2021'
    }
  ],
  experience: [],
  skills: [
    {
      category: 'Programmeren',
      skills: ['TypeScript', 'React', 'Nextjs', 'Node.js']
    },
    { category: 'Tools', skills: [] },
    { category: 'Cloud', skills: ['Amazon Web Services', 'Microsoft Azure'] }
  ]
};

export default data;
