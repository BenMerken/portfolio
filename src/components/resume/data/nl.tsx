import BooksSVG from '@/components/resume/data/svg-components/books';
import ColumnSVG from '@/components/resume/data/svg-components/colmn';
import EmailSVG from '@/components/resume/data/svg-components/email';
import GithubSVG from '@/components/resume/data/svg-components/github.';
import GlobeSVG from '@/components/resume/data/svg-components/globe';
import GuitarSVG from '@/components/resume/data/svg-components/guitar';
import PhoneSVG from '@/components/resume/data/svg-components/phone';
import { Resume } from '@/types/resume';

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
      svg: <GlobeSVG />,
      name: 'https://www.benmerken.com/'
    },
    github: {
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
