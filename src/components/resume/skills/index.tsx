import { Text, View } from '@react-pdf/renderer';

import sharedStyles from '@/components/resume/_shared/styles';
import { Skills as ResumeSkills } from '@/types/resume';

type SkillsProps = {
  data: ResumeSkills;
};

const Skills = ({ data }: SkillsProps) => {
  return (
    <View style={sharedStyles.section}>
      <Text style={sharedStyles.rightTitle}>Vaardigheden</Text>
      {data.map((skillset, i) => (
        <View key={i}>
          <Text>{skillset.category}</Text>
          {skillset.skills.map((skill, i) => (
            <Text key={i}>{skill}</Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Skills;
