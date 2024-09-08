import { StyleSheet, Text, View } from '@react-pdf/renderer';

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
    gap: 2
  },
  skill: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 2,

    border: `1px solid ${colors.backgroundPrimary}`,
    borderRadius: 8
  }
});

const Skills = ({ data }: SkillsProps) => {
  return (
    <View style={sharedStyles.section}>
      <Text style={sharedStyles.rightTitle}>Vaardigheden</Text>
      {data.map((skillset, i) => (
        <View key={i}>
          <Text style={sharedStyles.rightSubtitle}>{skillset.category}</Text>
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
