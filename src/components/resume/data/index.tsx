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
    //   name: 'https://www.benmerken.com'
    // },
    linkedin: {
      svg: <LinkedinSVG />,
      name: 'https://www.linkedin.com/in/benmerken'
    },
    github: {
      svg: <GithubSVG />,
      name: 'https://www.github.com/benmerken'
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
        degreeName: 'education.credentials.pxl.degree',
        period: {
          start: {
            month: 'months.september',
            year: 2017
          },
          end: {
            month: 'months.february',
            year: 2021
          }
        },
        additionalInfo: 'education.credentials.pxl.additionalInfo'
      }
    ],
    certifications: [
      {
        institution: 'Amazon Web Services (AWS)',
        name: 'AWS Certified Developer - Associate',
        date: {
          month: 'months.august',
          year: 2021
        },
        additionalInfo: 'education.certificates.aws.additionalInfo'
      },
      {
        institution: 'Microsoft',
        name: 'Microsoft Certified: Azure Fundamentals',
        date: {
          month: 'months.october',
          year: 2022
        },
        additionalInfo: 'education.certificates.azure.additionalInfo'
      }
    ]
  },
  experience: [
    {
      employer: 'Solidaris Vlaanderen',
      jobTitle: 'experience.solidaris.jobTitle',
      jobDescription: 'experience.solidaris.description',
      period: {
        start: {
          month: 'months.august',
          year: 2025
        }
      }
    },
    {
      employer: 'AppFoundry NV',
      jobTitle: 'experience.appFoundry.jobTitle',
      jobDescription: 'experience.appFoundry.description',
      highlightedProjects: [
        {
          client: 'FOD BOSA',
          period: {
            start: {
              month: 'months.august',
              year: 2022
            },
            end: {
              month: 'months.january',
              year: 2025
            }
          },
          description: 'experience.appFoundry.description'
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
          month: 'months.march',
          year: 2021
        },
        end: {
          month: 'months.january',
          year: 2025
        }
      }
    }
  ],
  skills: [
    {
      category: 'skills.softwareDevelopment',
      skills: [
        '.NET',
        'TypeScript',
        'JavaScript',
        'Angular',
        'React',
        'Next.js',
        'Vite',
        'Node.js',
        'HTML',
        'CSS',
        'Sass',
        'Tailwind CSS',
        'PWA',
        'React Native',
        'REST',
        'SQL'
      ]
    },
    {
      category: 'Tools',
      skills: [
        'Visual Studio',
        'Visual Studio Code',
        'Vim',
        'Git',
        'Docker',
        'ESLint',
        'Confluence',
        'Jira',
        'Figma'
      ]
    },
    {
      category: 'Cloud',
      skills: ['Amazon Web Services', 'Microsoft Azure', 'Vercel']
    }
  ]
};

export default data;
