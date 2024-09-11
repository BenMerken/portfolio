import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import sharedStyles from '@/components/resume/_shared/styles';
import { Education as ResumeEducation } from '@/types/resume';

export type EducationProps = {
  data: ResumeEducation;
};

const educationStyles = StyleSheet.create({
  degreeAndInstitution: {
    marginBottom: 4
  },
  additionalInfo: {
    fontFamily: 'Lato Italic'
  },
  section: {
    marginBottom: 8
  }
});

const Education = ({ data }: EducationProps) => {
  const { t } = useTranslation('resume');

  return (
    <View style={sharedStyles.section}>
      <Text style={sharedStyles.rightTitle}>{t('education.title')}</Text>
      <Text style={sharedStyles.rightSubtitle}>
        {t('education.credentials.title')}
      </Text>
      {data.credentials.map((edu, i) => (
        <View key={i} style={educationStyles.section}>
          <View style={educationStyles.degreeAndInstitution}>
            <Text style={sharedStyles.rightSubtitle2}>{t(edu.degreeName)}</Text>
            <Text>
              {edu.institution.name} | {t(edu.period.start.month)}{' '}
              {edu.period.start.year} - {t(edu.period.end?.month)}{' '}
              {edu.period.end?.year}
            </Text>
          </View>
          <Text style={educationStyles.additionalInfo}>
            {t(edu.additionalInfo)}
          </Text>
        </View>
      ))}
      <Text style={sharedStyles.rightSubtitle}>
        {t('education.certificates.title')}
      </Text>
      {data.certifications.map((cred, i) => (
        <View key={i} style={educationStyles.section}>
          <Text style={sharedStyles.rightSubtitle2}>{cred.name}</Text>
          <Text>
            {cred.institution} | {t(cred.date.month)} {cred.date.year}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Education;
