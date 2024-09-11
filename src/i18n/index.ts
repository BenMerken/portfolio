import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import portfolioEN from '@/i18n/locales/en-GB/portfolio.json';
import portfolioNL from '@/i18n/locales/nl-BE/portfolio.json';
import resumeEN from '@/i18n/locales/en-GB/resume.json';
import resumeNL from '@/i18n/locales/nl-BE/resume.json';

i18n.use(initReactI18next).init({
  resources: {
    'en-GB': {
      portfolio: portfolioEN,
      resume: resumeEN
    },
    'nl-BE': {
      portfolio: portfolioNL,
      resume: resumeNL
    }
  },
  lng: 'nl-BE',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
