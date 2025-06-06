import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import sharedStyles, { colors } from '@/components/resume/_shared/styles';
import { Skills as ResumeSkills } from '@/types/resume';

type SkillsProps = {
  data: ResumeSkills;
};

const skillsStyles = StyleSheet.create({
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 4
  },
  skill: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 4,

    textAlign: 'center',

    border: `1px solid ${colors.backgroundPrimary}`,
    borderRadius: '50%'
  }
});

const Skills = ({ data }: SkillsProps) => {
  const { t } = useTranslation('resume');

  return (
    <View style={sharedStyles.section}>
      <Text style={sharedStyles.rightTitle}>{t('skills.title')}</Text>
      {data.map((skillset, i) => (
        <View key={i}>
          <Text style={sharedStyles.rightSubtitle}>
            {t(skillset.category as 'resumeKey')}
          </Text>
          <View style={skillsStyles.skills}>
            {skillset.skills.map((skill, i) => (
              <Text key={i} style={skillsStyles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Skills;
