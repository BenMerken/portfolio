import BooksSVG from '@/components/resume/data/svg-components/books';
import ColumnSVG from '@/components/resume/data/svg-components/colmn';
import EmailSVG from '@/components/resume/data/svg-components/email';
import GithubSVG from '@/components/resume/data/svg-components/github.';
// import GlobeSVG from '@/components/resume/data/svg-components/globe';
import GuitarSVG from '@/components/resume/data/svg-components/guitar';
import LinkedinSVG from '@/components/resume/data/svg-components/linkedin';
import PhoneSVG from '@/components/resume/data/svg-components/phone';
import NetherlandsFlagSVG from '@/components/resume/data/svg-components/flags/nl';
import GreatBritainFlagSVG from '@/components/resume/data/svg-components/flags/gb';
import FranceFlagSVG from '@/components/resume/data/svg-components/flags/fr';
import GermanyFlagSVG from '@/components/resume/data/svg-components/flags/de';
import { Resume } from '@/types/resume';

const data: Resume = {
  top: {
    firstName: 'Ben',
    lastName: 'Merken'
  },
  personalia: {
    phone: {
      svg: <PhoneSVG />,
      name: '+32 489 43 21 30'
    },
    email: {
      svg: <EmailSVG />,
      name: 'ben.merken@gmail.com'
    },
    // website: {
    //   svg: <GlobeSVG />,
    //   name: 'https://www.benmerken.com/'
    // },
    linkedin: {
      svg: <LinkedinSVG />,
      name: 'https://www.linkedin.com/in/benmerken/'
    },
    github: {
      svg: <GithubSVG />,
      name: 'https://www.github.com/benmerken/'
    },
    languages: [
      {
        svg: <NetherlandsFlagSVG />,
        name: 'nl',
        proficiency: 'personalia.languages.dutch'
      },
      {
        svg: <GreatBritainFlagSVG />,
        name: 'en',
        proficiency: 'personalia.languages.english'
      },
      {
        svg: <FranceFlagSVG />,
        name: 'fr',
        proficiency: 'personalia.languages.french'
      },
      {
        svg: <GermanyFlagSVG />,
        name: 'de',
        proficiency: 'personalia.languages.german'
      }
    ],
    hobbies: [
      { svg: <GuitarSVG />, name: 'personalia.hobbies.guitar' },
      { svg: <ColumnSVG />, name: 'personalia.hobbies.history' },
      { svg: <BooksSVG />, name: 'personalia.hobbies.reading' }
    ]
  },
  education: {
    credentials: [
      {
        institution: {
          name: 'Hogeschool PXL',
          location: 'Hasselt'
        },
        degreeName:
          'Professionele Bachelor in de Toegepaste\nInformatica: Applicatie-ontwikkeling',
        period: {
          start: {
            month: 'september',
            year: 2017
          },
          end: {
            month: 'februari',
            year: 2021
          }
        },
        additionalInfo: 'Met grote onderscheiding'
      }
    ],
    certifications: [
      {
        institution: 'Amazon Web Services (AWS)',
        name: 'AWS Certified Developer - Associate',
        date: 'augustus 2021',
        additionalInfo: 'Referentienummer 6P2444WDENBQQB9Y'
      },
      {
        institution: 'Microsoft',
        name: 'Microsoft Certified: Azure Fundamentals',
        date: 'oktober 2022',
        additionalInfo: 'Referentienummer I435-4011'
      }
    ]
  },
  experience: [
    {
      employer: 'AppFoundry NV',
      jobTitle: 'Ontwikkelaar / consultant',
      jobDescription:
        'Ontwikkeling en onderhoud van TypeScript/JavaScript-applicaties, zowel in-house als voor AppFoundrys klanten, voornamelijk webapplicaties, ontwikkeld in React/Next.js, maar ook mobiele applicaties, ontwikkeld met React Native.',
      highlightedProjects: [
        {
          client: 'FOD BOSA',
          period: {
            start: {
              month: 'augustus',
              year: 2022
            }
          },
          description: ''
        }
      ],
      otherProjects: [
        'FOD BOSA',
        'Cyclis Bike Lease',
        'Elaut Group',
        'be•at (Sportpaleis Group)',
        'VAB',
        'Selligent',
        'SiteManager'
      ],
      period: {
        start: {
          month: 'maart',
          year: 2021
        }
      }
    },
    {
      employer: 'Alpine Digital',
      jobTitle: 'Jobstudent webontwikkelaar',
      jobDescription:
        'Meewerken aan de analyse en de uitwerking van de website voor Belgian Cycling Factory.Meewerken aan de analyse en de uitwerking van de website voor Belgian Cycling Factory.',
      period: {
        start: {
          month: 'augstus',
          year: 2020
        },
        end: {
          month: 'oktober',
          year: 2021
        }
      }
    }
  ],
  skills: [
    {
      category: 'Softwareontwikkeling',
      skills: [
        'TypeScript',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'HTML',
        'CSS',
        'Sass',
        'React Native',
        'SQL',
        'Agile',
        'DevOps'
      ]
    },
    {
      category: 'Tools',
      skills: [
        'Visual Studio Code',
        'Vim',
        'Git',
        'ESLint',
        'Confluence',
        'Jira'
      ]
    },
    {
      category: 'Cloud',
      skills: ['Amazon Web Services', 'Microsoft Azure', 'Vercel']
    }
  ]
};

export default data;
