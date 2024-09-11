import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import sharedStyles from '@/components/resume/_shared/styles';
import { Experience as ResumeExperience } from '@/types/resume';

type ExperienceProps = {
  data: ResumeExperience;
};

const experienceStyles = StyleSheet.create({
  section: {
    marginBottom: 4
  },
  additionalInfo: {
    fontFamily: 'Lato Italic',

    marginBottom: 4,
    marginTop: 4
  },
  projects: {
    marginLeft: 8
  }
});

const Experience = ({ data }: ExperienceProps) => {
  const { t } = useTranslation('resume');

  return (
    <View style={sharedStyles.section}>
      <Text style={sharedStyles.rightTitle}>{t('experience.title')}</Text>
      {data.map((exp, i) => (
        <View key={i} style={experienceStyles.section}>
          <Text style={sharedStyles.rightSubtitle2}>{t(exp.jobTitle)}</Text>
          <Text>
            {exp.employer} | {t(exp.period.start.month)} {exp.period.start.year}{' '}
            -{' '}
            {exp.period.end
              ? `${t(exp.period.end.month)} ${exp.period.end.year}`
              : ''}
          </Text>
          -
          {exp.period.end && (
            <Text>
              {t(exp.period.end.month)} {exp.period.end.year}
            </Text>
          )}
          <Text style={experienceStyles.additionalInfo}>
            {t(exp.jobDescription)}
          </Text>
          {exp.highlightedProjects && (
            <View>
              <Text style={sharedStyles.rightSubtitle}>
                {t('experience.appFoundry.clients')}
              </Text>
              <View style={experienceStyles.projects}>
                {exp.otherProjects?.map((project, i) => (
                  <Text key={i}>• {project}</Text>
                ))}
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default Experience;
