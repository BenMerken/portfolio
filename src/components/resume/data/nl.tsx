import BabySVG from '@/components/resume/data/svg-components/baby';
import BooksSVG from '@/components/resume/data/svg-components/books';
import ColumnSVG from '@/components/resume/data/svg-components/colmn';
import EmailSVG from '@/components/resume/data/svg-components/email';
import GithubSVG from '@/components/resume/data/svg-components/github.';
import GlobeSVG from '@/components/resume/data/svg-components/globe';
import GuitarSVG from '@/components/resume/data/svg-components/guitar';
import LinkedinSVG from '@/components/resume/data/svg-components/linkedin';
import PhoneSVG from '@/components/resume/data/svg-components/phone';
import PinSVG from '@/components/resume/data/svg-components/pin';
import SuitcaseSVG from '@/components/resume/data/svg-components/suitcase';
import NetherlandsFlagSVG from '@/components/resume/data/svg-components/flags/nl';
import GreatBritainFlagSVG from '@/components/resume/data/svg-components/flags/gb';
import FranceFlagSVG from '@/components/resume/data/svg-components/flags/fr';
import GermanyFlagSVG from '@/components/resume/data/svg-components/flags/de';
import { Resume } from '@/types/resume';

const data: Resume = {
  top: {
    firstName: 'Ben',
    lastName: 'Merken',
    jobTitle: 'Full Stack webontwikkelaar'
  },
  personalia: {
    dateOfBirth: {
      svg: <BabySVG />,
      day: 25,
      month: 'april',
      year: 1995
    },
    workExperience: {
      svg: <SuitcaseSVG />,
      text: '3,5 jaar ervaring'
    },
    residence: {
      svg: <PinSVG />,
      address: 'Molenveld 13',
      zipCode: 3650,
      city: 'Dilsen-Stokkem'
    },
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
        proficiency: 'Moedertaal'
      },
      {
        svg: <GreatBritainFlagSVG />,
        name: 'en',
        proficiency: 'Professionele vaardigheid'
      },
      {
        svg: <FranceFlagSVG />,
        name: 'fr',
        proficiency: 'Spreken: matig; lezen: goed'
      },
      {
        svg: <GermanyFlagSVG />,
        name: 'de',
        proficiency: 'Spreken: matig; lezen: goed'
      }
    ],
    hobbies: [
      { svg: <GuitarSVG />, name: 'Klassieke gitaar' },
      { svg: <ColumnSVG />, name: '(Oude) Geschiedenis' },
      { svg: <BooksSVG />, name: 'Lezen' }
    ]
  },
  profile:
    'Met 3,5 jaar ervaring als full-stack webontwikkelaar en consultant heb ik een brede expertise opgebouwd in zowel front-end als back-end ontwikkeling, evenals het adviseren van klanten over technische oplossingen.\nNa deze toegewijde jaren in software consultancy ben ik nu op zoek naar een nieuwe uitdaging in in-house productontwikkeling, waar ik mijn technische kennis kan inzetten om te werken aan langetermijnprojecten en de kwaliteit van een product verder kan optimaliseren. Daarnaast ben ik gemotiveerd om me verder te ontwikkelen en sta ik open om aanvullende training te volgen in quality assurance en netwerkbeheer om mijn vaardigheden uit te breiden en een breder scala aan technische verantwoordelijkheden op me te nemen.',
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
